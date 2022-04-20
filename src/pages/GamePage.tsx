import { View, Text, StyleSheet } from "react-native";
import Wordle from "../components/Wordle/Wordle";

export default function GamePage() {
  return (
    <View style={styles.container}>
      <Wordle />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 80,
  },
  heading: {
    fontSize: 30,
    fontWeight: "600",
  },
});
