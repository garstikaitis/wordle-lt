import { View } from "react-native";
import GridTile from "../GridTile/GridTile";
import useColors from "../../hooks/useColors";
import styles from "./WordleGrid.styles";
import { WordleGridProps } from "./WordleGrid.types";

export default function WordleGrid(props: WordleGridProps) {
  return (
    <View>
      <View style={styles.row}>
        {generateGridTiles(props.cols, props.rows)}
      </View>
    </View>
  );
}

function generateGridTiles(cols: number, rows: number) {
  const color = useColors();
  return [...Array(cols).keys()].map(row => {
    return (
      <View key={row}>
        {[...Array(rows).keys()].map(letter => (
          <GridTile color={color} key={letter} />
        ))}
      </View>
    );
  });
}
