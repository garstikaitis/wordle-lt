import { View } from "react-native";
import WordleKeyboardKey from "../WordleKeyboardKey/WordleKeyboardKey";
import useColors from "../../hooks/useColors";
import styles from "./WordleKeyboard.styles";

const firstRow = ["Ą", "Č", "Ę", "Ė", "Į", "Š", "Ų", "Ū", "Ž"];
const secondRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const thirdRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "P"];
const fourthRow = ["Z", "X", "C", "V", "B", "N", "M"];

const keyboard = [firstRow, secondRow, thirdRow, fourthRow];

export default function WordleKeyboard() {
  return <View style={styles.keyboard}>{generateKeyboard()}</View>;
}

const color = useColors();

function generateKeyboard() {
  return keyboard.map(row => {
    return (
      <View style={styles.keyboardRow} key={row}>
        {row.map(keyboardButton => (
          <WordleKeyboardKey
            buttonColor={color}
            key={keyboardButton}
            keyboardButton={keyboardButton}
          />
        ))}
      </View>
    );
  });
}
