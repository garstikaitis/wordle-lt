import { TouchableOpacity, View, Text } from "react-native";
import styles from "./SelectGame.styles";

export default function SelectGame({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("GameScreen")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Daily challenge</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("GameScreen")}
      >
        <Text style={styles.buttonText}>Practice mode</Text>
      </TouchableOpacity>
    </View>
  );
}
