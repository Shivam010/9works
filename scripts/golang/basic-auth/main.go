package main

import (
	"encoding/base64"
	"net/http"
	"strings"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		head := r.Header.Get("Authorization")
		if len(head) < 11 {
			w.Header().Set("WWW-Authenticate", "Basic realm=\"Secure Area\"")
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		creds, err := base64.StdEncoding.DecodeString(strings.TrimPrefix(head, "Basic "))
		if err != nil {
			w.Header().Set("WWW-Authenticate", "Basic realm=\"Secure Area\"")
			w.WriteHeader(http.StatusUnauthorized)
			return
		}
		w.Write(creds)
	})
	println("Running at :8080")
	http.ListenAndServe(":8080", nil)
}
