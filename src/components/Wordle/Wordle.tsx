import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import WordleGrid from "../WordleGrid/WordleGrid";
import WordleKeyboard from "../WordleKeyboard/WordleKeyboard";

const CORRECT_WORD = "STORE";

export default function Wordle() {
  const [currentWord, setCurrentWord] = useState("");
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [words, setWords] = useState([
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
    "     ",
  ]);

  function checkIfWordsMatch() {
    return currentWord === CORRECT_WORD;
  }

  function checkWord(keyboardButton: string) {
    if (keyboardButton === "❌") {
      setCurrentWord("");
      let wordUpdate = [...words];
      wordUpdate[activeRowIndex] = "     ";
      setWords(wordUpdate);
    }
    if (keyboardButton === "🏄🏿‍♀️") {
      if (currentWord.length === 5) {
        if (checkIfWordsMatch()) {
          alert("VICTORY");
        } else {
          let wordUpdate = [...words];
          wordUpdate[activeRowIndex] = currentWord;
          setWords(wordUpdate);
          setCurrentWord("");
          setActiveRowIndex(activeRowIndex + 1);
        }
      }
    } else {
      if (currentWord.length === 5) {
        return;
      }
      setCurrentWord(currentWord + keyboardButton);
      let wordUpdate = [...words];
      wordUpdate[activeRowIndex] = currentWord;
      console.log(wordUpdate);
      setWords(wordUpdate);
      console.log(
        currentWord.split(""),
        wordUpdate,
        words[activeRowIndex].split("")
      );
    }
  }
  return (
    <View>
      <WordleGrid
        activeRowIndex={activeRowIndex}
        currentWord={currentWord}
        words={words}
      />
      <WordleKeyboard onPress={checkWord} />
    </View>
  );
}
