import dimensions from "../../constants/dimensions";
import { GridTileProps } from "./GridTile.types";
import { StyleSheet } from "react-native";
const width = dimensions.WIDTH / 5 - 10;

function generateColor(props: GridTileProps): string {
  if (props.letter.isInCorrectPlace) {
    return "#77cc74";
  }
  if (props.letter.isInWord) {
    return "#e9f76d";
  }
  if (props.letter.isTouched) {
    return "#808080";
  }
  return "#d4d4d4";
}

export default function styles(props: GridTileProps) {
  const color = generateColor(props);
  return StyleSheet.create({
    tile: {
      height: width,
      width,
      marginVertical: 4,
      borderRadius: 8,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color,
    },
    letter: {
      fontSize: width - 4,
    },
  });
}
