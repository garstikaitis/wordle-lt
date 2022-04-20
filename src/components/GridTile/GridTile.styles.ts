import dimensions from "../../constants/dimensions";
import { GridTileProps } from "./GridTile.types";
import { StyleSheet } from "react-native";
const width = dimensions.WIDTH / 5 - 10;

export default function styles(props: GridTileProps) {
  return StyleSheet.create({
    tile: {
      height: width,
      width,
      marginVertical: 4,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: props.color,
    },
    letter: {
      fontSize: width - 4,
    },
  });
}
