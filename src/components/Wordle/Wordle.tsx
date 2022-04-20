import { useState } from "react";
import { View, Text } from "react-native";
import WordleGrid from "../WordleGrid/WordleGrid";
import WordleKeyboard from "../WordleKeyboard/WordleKeyboard";

const CORRECT_WORD = "STORE";

export default function Wordle() {
  const [currentWord, setCurrentWord] = useState("");
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [words, setWords] = useState([
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
  ]);

  function checkIfWordsMatch() {
    return currentWord === CORRECT_WORD;
  }

  function deleteCharacterFromWordAndAddSpaces(): string[] {
    let finalArray = ["", "", "", "", ""];
    currentWord.split("").forEach((letter, index) => {
      if (index !== currentWord.split("").length - 1) {
        finalArray[index] = letter;
      }
    });
    return finalArray;
  }

  function checkWord(keyboardButton: string) {
    if (keyboardButton === "❌") {
      const deletedWord = deleteCharacterFromWordAndAddSpaces();
      console.log(deletedWord);
      let wordUpdate = [...words];
      wordUpdate[activeRowIndex] = deletedWord;
      setWords(wordUpdate);
      setCurrentWord(deletedWord.join(""));
      setActiveLetterIndex(activeLetterIndex - 1);
    } else if (keyboardButton === "🏄🏿‍♀️") {
      if (currentWord.length === 5) {
        if (checkIfWordsMatch()) {
          alert("VICTORY");
        } else {
          let wordUpdate = [...words];
          wordUpdate[activeRowIndex] = currentWord.split("");
          setWords(wordUpdate);
          setCurrentWord("");
          setActiveLetterIndex(0);
          setActiveRowIndex(activeRowIndex + 1);
        }
      }
    } else {
      if (currentWord.length === 5) {
        return;
      }
      setCurrentWord(currentWord + keyboardButton);
      let wordUpdate = [...words];
      wordUpdate[activeRowIndex][activeLetterIndex] = keyboardButton;
      setWords(wordUpdate);
      setActiveLetterIndex(activeLetterIndex + 1);
    }
  }
  return (
    <View>
      <WordleGrid
        activeRowIndex={activeRowIndex}
        currentWord={currentWord}
        words={words}
        activeLetterIndex={activeLetterIndex}
      />
      <WordleKeyboard onPress={checkWord} />
    </View>
  );
}
