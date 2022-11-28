package main

import (
	"bufio"
	"html/template"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

type verb struct {
	Id             int
	Value          string
	Form           string
	Audio          string
	Base           *verb
	PastSimple     *verb
	PastParticiple *verb
	Next           *verb
}

type list struct {
	head *verb
}

func (l *list) add(n *verb) *verb {
	h := l.head
	l.head = n
	l.head.Next = h
	return l.head
}

func (l list) search(id int) *verb {
	for l.head != nil {
		if l.head.Id == id {
			return l.head
		}
		l.head = l.head.Next
	}
	return nil
}

var (
	verbs list
)

const (
	base           = "base"
	pastSimple     = "past simple"
	pastParticiple = "past participle"
)

func flashcardHandler(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case http.MethodGet:
		if !r.URL.Query().Has("id") {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		id, err := strconv.Atoi(r.URL.Query().Get("id"))
		if err != nil {
			log.Println(err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		verb := verbs.search(id)
		if verb == nil {
			w.WriteHeader(http.StatusBadRequest)
			return
		}
		t, err := template.ParseFiles("./playing_board.gohtml")
		if err != nil {
			log.Println(err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
		if err := t.ExecuteTemplate(w, "PlayingBoard", verb); err != nil {
			log.Println(err)
			w.WriteHeader(http.StatusInternalServerError)
			return
		}
	}
}

func init() {
	file, err := os.Open("verbs.txt")
	if err != nil {
		log.Fatal(err)
	}
	defer file.Close()
	scanner := bufio.NewScanner(file)
	i := 0
	for scanner.Scan() {
		forms := strings.Split(scanner.Text(), "|")
		base := &verb{
			Id:             i + 1,
			Value:          forms[0],
			Form:           base,
			Audio:          "https://storage.googleapis.com/emptyopenproject/rise.mp3",
			Base:           nil,
			PastSimple:     nil,
			PastParticiple: nil,
		}
		pastSimple := &verb{
			Id:             i + 2,
			Value:          forms[1],
			Form:           pastSimple,
			Audio:          "https://storage.googleapis.com/emptyopenproject/rise.mp3",
			Base:           nil,
			PastSimple:     nil,
			PastParticiple: nil,
		}
		pastParticiple := &verb{
			Id:             i + 3,
			Value:          forms[2],
			Form:           pastParticiple,
			Audio:          "https://storage.googleapis.com/emptyopenproject/rise.mp3",
			Base:           nil,
			PastSimple:     nil,
			PastParticiple: nil,
		}
		base.Base = base
		base.PastSimple = pastSimple
		base.PastParticiple = pastParticiple
		pastSimple.Base = base
		pastSimple.PastSimple = pastSimple
		pastSimple.PastParticiple = pastParticiple
		pastParticiple.Base = base
		pastParticiple.PastSimple = pastSimple
		pastParticiple.PastParticiple = pastParticiple
		verbs.add(base)
		verbs.add(pastSimple)
		verbs.add(pastParticiple)
		i += 3
	}
	if err := scanner.Err(); err != nil {
		log.Fatal(err)
	}
}

func main() {
	serveMux := http.NewServeMux()
	serveMux.Handle("/static/", http.StripPrefix("/static", http.FileServer(http.Dir("./static"))))
	serveMux.HandleFunc("/flashcard/", flashcardHandler)
	if err := http.ListenAndServe(":8080", serveMux); err != nil {
		log.Fatal(err)
	}
}
