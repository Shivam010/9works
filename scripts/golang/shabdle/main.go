package main

import (
	"bufio"
	"encoding/json"
	"fmt"
	"io/fs"
	"math"
	"math/rand"
	"os"
)

const (
	base              = "./scripts/golang/shabdle"
	dictinoary        = base + "/hindi-dictionary.txt" // https://gist.github.com/Shivam010/f714d58de515e64a6ac40af6ab5b1862
	commonWords       = base + "/1000-most-common-hindi-words.txt"
	wordsWithoutMatra = base + "/150-words-without-matra.txt"
	// output files :down:
	threeLetterWords       = base + "/three-letter-common-words.json"
	threeLetterWordsLookUp = base + "/three-letter-hindi-lookup.json"
	// halanth character
	halanth = '्'
)

var (
	hindiAlphabets = map[string]struct{}{
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
	similarAlphabets = map[rune]rune{
		'ऩ': 'न',
		'ऱ': 'र',
		'ॡ': 'ल', 'ळ': 'ल', 'ऴ': 'ल',
		'क़': 'क',
		'ख़': 'ख',
		'ग़': 'ग',
		'ज़': 'ज',
		'ड़': 'ङ',
		'ढ़': 'ढ',
		'फ़': 'फ',
		'य़': 'य',
		'ॠ': 'ऋ',
	}
	matras = map[string]struct{}{
		"़": {}, "ा": {},
		"ि": {}, "ी": {}, "ु": {}, "ू": {},
		"े": {}, "ै": {}, "ॉ": {},
		"ो": {}, "ौ": {},
		"ं": {}, "ँ": {}, // "ः": {},
		string(halanth): {},
	}
)

func main() {
	// rand.Seed(time.Now().Unix())
	ExtractThreeLetterWordFromDictionary()
	ExtractThreeLetterCommonWords()
	fmt.Println("Done")
}

func ExtractThreeLetterWordFromDictionary() {
	// Read from dictionary
	list1, err := ReadWordsFromTxt(dictinoary)
	if err != nil {
		endScript("Error reading file", dictinoary, err)
	}
	// Read common words
	list2, err := ReadWordsFromTxt(commonWords)
	if err != nil {
		endScript("Error reading file", commonWords, err)
	}
	// Read common words without matra
	list3, err := ReadWordsFromTxt(wordsWithoutMatra)
	if err != nil {
		endScript("Error reading file", wordsWithoutMatra, err)
	}
	// Filter
	allWords := append(list1, list2...)
	allWords = append(allWords, list3...)
	filtered := FilterThreeLetterWords(allWords)
	// Dump
	Dump(threeLetterWordsLookUp, filtered)
	fmt.Println("No. of Words in", threeLetterWordsLookUp, "is", len(filtered))
}

func ExtractThreeLetterCommonWords() {
	// Read common words
	allWords, err := ReadWordsFromTxt(commonWords)
	if err != nil {
		endScript("Error reading file", commonWords, err)
	}
	// Read common words without matra
	withoutMatra, err := ReadWordsFromTxt(wordsWithoutMatra)
	if err != nil {
		endScript("Error reading file", wordsWithoutMatra, err)
	}
	allWords = append(allWords, withoutMatra...)
	// Filter
	filtered := FilterThreeLetterWords(allWords, true)
	// Dump
	Dump(threeLetterWords, filtered)
	fmt.Println("No. of Words in", threeLetterWords, "is", len(filtered))
}

func FilterThreeLetterWords(in []string, shuffle ...interface{}) []string {
	filtered, mp := in[:0], map[string]struct{}{}
	for _, word := range in {
		hasMatra, noOfCharacters := false, 0
		updWord := ""
		for _, ch := range word {
			if sal, ok := similarAlphabets[ch]; ok {
				ch = sal
			}
			updWord += string(ch)
			if _, ok := hindiAlphabets[string(ch)]; ok {
				noOfCharacters++
			} else {
				if _, ok = matras[string(ch)]; ok {
					hasMatra = true
				} else {
					// ignore this word - as it has some unknown characters
					noOfCharacters = math.MinInt
					break
				}
			}
			if ch == halanth {
				// ignore this word - as it has a partial character
				noOfCharacters = math.MaxInt
				break
			}
		}
		if noOfCharacters == 3 {
			if _, ok := mp[updWord]; !ok {
				mp[updWord] = struct{}{}
				filtered = append(filtered, updWord)
			}
		}
		_ = hasMatra
		// fmt.Println(word, " -> ", noOfCharacters, hasMatra)
	}
	if len(shuffle) != 0 {
		// Shuffle
		rand.Shuffle(len(filtered), func(i, j int) { filtered[i], filtered[j] = filtered[j], filtered[i] })
	}
	return filtered
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

func Dump(name string, words []string) {
	data, err := json.Marshal(words)
	if err != nil {
		endScript("Error marshaling data", err)
	}
	if err = os.WriteFile(name, data, fs.ModePerm); err != nil {
		endScript("Error writing data to", name, err)
	}
}

func endScript(in ...interface{}) {
	fmt.Println(in...)
	os.Exit(1)
}
