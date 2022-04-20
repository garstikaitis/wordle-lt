import { View, Text, StyleSheet } from "react-native";
import dimensions from "../../constants/dimensions";
import { GridTileProps } from "./GridTile.types";
import styles from "./GridTile.styles";

export default function GridTile(props: GridTileProps) {
  return (
    <View style={styles(props).tile}>
      <Text style={styles(props).letter}>A</Text>
    </View>
  );
}
