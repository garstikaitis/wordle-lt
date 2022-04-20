import { WordleKeyboardKeyProps } from "./WordleKeyboardKey.types";
import { StyleSheet } from "react-native";

export default function styles(props: WordleKeyboardKeyProps) {
  return StyleSheet.create({
    keyboardKey: {
      backgroundColor: props.buttonColor,
      width: 30,
      height: 50,
      marginVertical: 10,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 8,
    },
    text: {
      fontWeight: "600",
    },
  });
}
