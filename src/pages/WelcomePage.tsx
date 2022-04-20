import { Text, View, StyleSheet } from "react-native";
import SelectGame from "../components/SelectGame/SelectGame";

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wordle</Text>
      <SelectGame navigation={navigation} />
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
