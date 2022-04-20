import { useState } from "react";
import { View, Text } from "react-native";
import WordleGrid from "../WordleGrid/WordleGrid";
import WordleKeyboard from "../WordleKeyboard/WordleKeyboard";
import defaultWordState from "./utils/defaultWordState";

const CORRECT_WORD = "LABAS";

export default function Wordle() {
  const [currentWord, setCurrentWord] = useState("");
  const [activeRowIndex, setActiveRowIndex] = useState(0);
  const [activeLetterIndex, setActiveLetterIndex] = useState(0);
  const [words, setWords] = useState(defaultWordState);

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
      let wordUpdate = [...words];
      wordUpdate[activeRowIndex][activeLetterIndex - 1] = {
        letter: "",
        isTouched: true,
        isInCorrectPlace: false,
        isInWord: false,
      };
      setWords(wordUpdate);
      setCurrentWord(deletedWord.join(""));
      if (activeLetterIndex !== 0) {
        setActiveLetterIndex(activeLetterIndex - 1);
      }
    } else if (keyboardButton === "🏄🏿‍♀️") {
      if (currentWord.length === 5) {
        if (checkIfWordsMatch()) {
          alert("VICTORY");
        } else {
          let wordUpdate = [...words];
          wordUpdate[activeRowIndex] = defaultWordState[0];
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
      wordUpdate[activeRowIndex][activeLetterIndex].letter = keyboardButton;
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
