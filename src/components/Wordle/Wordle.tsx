import { View } from "react-native";
import WordleGrid from "../WordleGrid/WordleGrid";
import WordleKeyboard from "../WordleKeyboard/WordleKeyboard";

export default function Wordle() {
  return (
    <View>
      <WordleGrid cols={5} rows={6} />
      <WordleKeyboard />
    </View>
  );
}
