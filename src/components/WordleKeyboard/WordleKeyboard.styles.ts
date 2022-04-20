import dimensions from "../../constants/dimensions";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  keyboardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: dimensions.WIDTH - 20,
  },
  keyboard: {
    justifyContent: "flex-end",
    flex: 1,
    marginBottom: 20,
    alignItems: "center",
  },
});
