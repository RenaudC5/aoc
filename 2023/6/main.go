package main

import (
	"os"
	"strings"
)

func check(e error) {
    if e != nil {
        panic(e)
    }
}

func main() {
	dat, err := os.ReadFile("./input.txt")
    check(err)
    data := strings.Split(string(dat), "")
}