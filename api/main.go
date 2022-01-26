package api

import (
	"context"
	"database/sql"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"path"
	"time"

	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/sync/errgroup"
)

func ObtainData(name string) ([]string, error) {
	dump, err := os.ReadFile(name)
	if err != nil {
		return nil, err
	}
	var words []string
	if err = json.Unmarshal(dump, &words); err != nil {
		return nil, err
	}
	return words, nil
}

func Main(w http.ResponseWriter, r *http.Request) {
	ctx := context.Background()
	db, err := sql.Open("mysql", os.Getenv("PLANETSCALE_CONNECTION_STRING_MAIN"))
	if err != nil {
		Writeln(w, err)
		return
	}
	defer db.Close()
	db.SetMaxOpenConns(1200)
	db.SetMaxIdleConns(1200)
	db.SetConnMaxLifetime(time.Minute * 10)

	mxId, cnt := 0, 0
	err = db.QueryRowContext(ctx, `select max(id), count(*) from wordle`).Scan(&mxId, &cnt)
	if err != nil {
		Writeln(w, err)
		return
	}
	Writeln(w, "mxId, cnt", mxId, cnt)

	// for i := 0; i < 20; i++ {
	// 	cnt, err := db.Exec(`delete from wordle where id < ?`, i*100000)
	// 	a, _ := cnt.RowsAffected()
	// 	b, _ := cnt.LastInsertId()
	// 	Writer(w, "exec", a, b, err)
	// }
	// db.QueryRow(`select count(*) from wordle`).Scan(&cnt)
	// Writer(w, "after cnt", cnt)
	// return

	pwd := os.Getenv("PWD")
	words, err := ObtainData(path.Join(pwd, "/api/dump.json"))
	if err != nil {
		Writeln(w, "dump 1", err)
		return
	}
	second, err := ObtainData(path.Join(pwd, "/api/dump2.json"))
	if err != nil {
		Writeln(w, "dump 2", err)
		return
	}
	final := append(words, second...)

	Writeln(w, len(final))
	return

	gr, lmt := errgroup.Group{}, 1200
	mxInUse := db.Stats().InUse
	ch := make(chan string)
	for no := 0; no < lmt; no++ {
		no := no
		gr.Go(func() error {
			for i, wr := range final {
				if i%lmt != no {
					continue
				}
				cnt, err := db.ExecContext(ctx, `insert into wordle (word, day) values(?, ?)`, wr, i)
				if err != nil {
					fmt.Println("failed", wr)
					ch <- fmt.Sprintln("word failed:", wr, cnt, err)
				}
				x := db.Stats().InUse
				if mxInUse < x {
					mxInUse = x
					fmt.Println("max in use changed", mxInUse, x)
				}
			}
			return nil
		})
	}
	gr.Wait()
	close(ch)
	for str := range ch {
		Writeln(w, str)
	}
	st := db.Stats()

	Writeln(w, "Done", len(final))
	Writeln(w, "mxInUse", mxInUse, "st.InUse", st.InUse, "st.OpenConnections", st.OpenConnections, "st.Idle", st.Idle, "st.WaitCount", st.WaitCount)
}

func Writeln(w http.ResponseWriter, a ...interface{}) {
	fmt.Println(a...)
	fmt.Fprintln(w, a...)
}
