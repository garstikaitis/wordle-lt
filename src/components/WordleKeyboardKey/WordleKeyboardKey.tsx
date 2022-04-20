import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { WordleKeyboardKeyProps } from "./WordleKeyboardKey.types";
import styles from "./WordleKeyboardKey.styles";

export default function WordleKeyboardKey(props: WordleKeyboardKeyProps) {
  return (
    <TouchableOpacity style={styles(props).keyboardKey}>
      <Text style={styles(props).text}>{props.keyboardButton}</Text>
    </TouchableOpacity>
  );
}
