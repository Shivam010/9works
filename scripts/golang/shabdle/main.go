package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io/fs"
	"math/rand"
	"os"
)

const (
	base              = "./scripts/golang/shabdle"
	commonWords       = base + "/1000-most-common-hindi-words.txt"
	wordsWithoutMatra = base + "/150-words-without-matra.txt"
	threeLetterWords  = base + "/three-letter-hindi-words.json"
)

var (
	characters      = [124]string{"", "अ", "आ", "इ", "ई", "उ", "ऊ", "ऋ", "ऌ", "ऍ", "ऎ", "ए", "ऐ", "ऑ", "ऒ", "ओ", "औ", "क", "ख", "ग", "घ", "ङ", "च", "छ", "ज", "झ", "ञ", "ट", "ठ", "ड", "ढ", "ण", "त", "थ", "द", "ध", "न", "ऩ", "प", "फ", "ब", "भ", "म", "य", "र", "ऱ", "ल", "ळ", "ऴ", "व", "श", "ष", "स", "ह", "ऺ", "ऻ", "़", "ऽ", "ा", "ि", "ी", "ु", "ू", "ृ", "ॄ", "ॅ", "ॆ", "े", "ै", "ॉ", "ॊ", "ो", "ौ", "्", "ॎ", "ॏ", "ॐ", "॑", "॒", "॓", "॔", "ॕ", "ॖ", "ॗ", "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", "य़", "ॠ", "ॡ", "ॢ", "ॣ", "।", "॥", "०", "१", "२", "३", "४", "५", "६", "७", "८", "९", "॰", "ॱ", "ॲ", "ॳ", "ॴ", "ॵ", "ॶ", "ॷ", "ॸ", "ॹ", "ॺ", "ॻ", "ॼ", "ॽ", "ॾ", "ॿ"}
	hindiCharacters = map[string]struct{}{
		// 11 स्वरों vowels
		"अ": {}, "आ": {}, "इ": {}, "ई": {},
		"उ": {}, "ऊ": {}, "ए": {}, "ऐ": {},
		"ओ": {}, "औ": {}, "ऋ": {},
		// 3 others
		"अं": {}, "अँ": {}, "अः": {},
		// 33 व्यंजनों consonants
		"क": {}, "ख": {}, "ग": {}, "घ": {}, "ङ": {},
		"च": {}, "छ": {}, "ज": {}, "झ": {}, "ञ": {},
		"ट": {}, "ठ": {}, "ड": {}, "ढ": {}, "ण": {},
		"त": {}, "थ": {}, "द": {}, "ध": {}, "न": {},
		"प": {}, "फ": {}, "ब": {}, "भ": {}, "म": {},
		"य": {}, "र": {}, "ल": {}, "व": {}, "श": {},
		"ष": {}, "स": {}, "ह": {},
		// 6 others
		"क्ष": {}, "त्र": {}, "ज्ञ": {}, "श्र": {},
		"ड़": {}, "ढ़": {},
	}
)

func main() {
	// utf8.
	_ = hindiCharacters
	// ReadShuffleAndDump()
	fmt.Println("Done")
}

func ExtractThreeLetterCommonWords() {
	// Read
	words, err := ReadWordsFromTxt(commonWords)
	if err != nil {
		endScript("Error reading file", commonWords, err)
	}
	_ = words

}

func ReadShuffleAndDump() {
	// Read
	words, err := ReadWordsFromTxt(wordsWithoutMatra)
	if err != nil {
		endScript("Error reading file", wordsWithoutMatra, err)
	}
	// Shuffle
	rand.Shuffle(len(words), func(i, j int) { words[i], words[j] = words[j], words[i] })
	// Dump
	data, err := json.Marshal(words)
	if err != nil {
		endScript("Error marshaling data", err)
	}
	if err = os.WriteFile(threeLetterWords, data, fs.ModePerm); err != nil {
		endScript("Error writing data to", threeLetterWords, err)
	}
}

func ReadWordsFromTxt(path string) ([]string, error) {
	file, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer file.Close()

	var list []string
	scanner := bufio.NewScanner(file)
	for scanner.Scan() {
		list = append(list, scanner.Text())
	}
	return list, err
}

func endScript(in ...interface{}) {
	fmt.Println(in...)
	os.Exit(1)
}
