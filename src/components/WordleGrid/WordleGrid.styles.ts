import dimensions from "../../constants/dimensions";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  gridRow: {
    marginVertical: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: dimensions.WIDTH,
  },
});
