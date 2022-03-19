package appointy

import (
	"context"
	"crypto/tls"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"path"

	userPb "go.saastack.io/user/pb"
	"google.golang.org/genproto/protobuf/field_mask"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/status"
)

const (
	BasicPass           = "APPOINTY_BASIC_PASS"
	AllowedEnvFile      = "./api/appointy/allowed-env.json"
	ImpersonationEnvKey = "APPOINTY_IMPERSONATION_SECRETS"
)

type ImpersonationSecrets struct {
	GrpcKey   string `json:"grpc_key"`
	GrpcValue string `json:"grpc_value"`
}

func Impersonate(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("content-type", "application/json; charset=utf-8")

	allowedEnvs := AllowedEnvsType{}
	fileData, _ := os.ReadFile(path.Join(os.Getenv("PWD"), AllowedEnvFile))
	_ = json.Unmarshal(fileData, &allowedEnvs)
	fmt.Println(allowedEnvs)

	cnf := &ImpersonationSecrets{}
	_ = json.Unmarshal([]byte(os.Getenv(ImpersonationEnvKey)), cnf)

	if r.Header.Get("authorization") != "Bearer "+os.Getenv(BasicPass) {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write([]byte(`{"error":"unauthorized"}`))
		return
	}

	if r.Method == http.MethodGet {
		body, _ := json.Marshal(allowedEnvs)
		w.Write(body)
		return
	}
	if r.Method != http.MethodPost {
		w.WriteHeader(http.StatusMethodNotAllowed)
		return
	}

	env := r.URL.Query().Get("env")
	email := r.URL.Query().Get("email")
	envInfo := allowedEnvs[env]

	if email == "" {
		w.WriteHeader(http.StatusPreconditionRequired)
		w.Write([]byte(`{"error":"email is required"}`))
		return
	}
	if env == "" || envInfo.Name == "" {
		w.WriteHeader(http.StatusPreconditionFailed)
		w.Write([]byte(`{"error":"invalid env provided"}`))
		return
	}
	ctx := r.Context()

	conn, err := OpenConn(ctx, cnf, envInfo.Grpc, env != "dev")
	if err != nil {
		log.Println("error in OpenConn", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"error":"Something went wrong, unable to make connection"}`))
	}

	userCli := userPb.NewUserProfilesClient(conn)
	cli := userPb.NewOneTimeAuthenticationCodeClient(conn)

	usr, err := userCli.GetUserProfileByEmail(ctx, &userPb.GetUserProfileByEmailRequest{
		Email:    email,
		ViewMask: &field_mask.FieldMask{Paths: []string{}},
	})
	if err != nil {
		st, ok := status.FromError(err)
		if ok {
			log.Println("unable to extract user information:", email, st.Message())
		} else {
			log.Println("unable to extract user information:", email, err)
		}
		w.WriteHeader(http.StatusPreconditionFailed)
		w.Write([]byte(`{"error":"unable to extract user information"}`))
		return
	}
	_ = usr

	res, err := cli.GenerateOtac(ctx, &userPb.OtacRequest{
		Email: email,
	})
	if err != nil {
		log.Println("error in impersonation", err, email)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write([]byte(`{"error":"Something went wrong, unable to impersonate"}`))
		return
	}
	link := envInfo.Url + "?otac=" + res.Id
	w.WriteHeader(http.StatusOK)
	w.Write([]byte(`{"link":"` + link + `"}`))
}

func OpenConn(ctx context.Context, cnf *ImpersonationSecrets, grpcUrl string, secure bool) (*grpc.ClientConn, error) {
	opts := []grpc.DialOption{
		grpc.WithChainUnaryInterceptor(
			func(ctx context.Context, method string, req, reply interface{}, cc *grpc.ClientConn, invoker grpc.UnaryInvoker, opts ...grpc.CallOption) error {
				ctx = metadata.AppendToOutgoingContext(ctx, cnf.GrpcKey, cnf.GrpcValue)
				return invoker(ctx, method, req, reply, cc, opts...)
			},
		),
	}
	if secure {
		opts = append(opts, grpc.WithTransportCredentials(credentials.NewTLS(&tls.Config{})))
	} else {
		opts = append(opts, grpc.WithInsecure())
	}
	conn, err := grpc.DialContext(ctx, grpcUrl, opts...)
	if err != nil {
		fmt.Println("error in OpenConn: ", err)
		return nil, err
	}
	return conn, nil
}

type AllowedEnvsType map[string]struct {
	Url  string `json:"url"`
	Name string `json:"name"`
	Grpc string `json:"grpc"`
}
