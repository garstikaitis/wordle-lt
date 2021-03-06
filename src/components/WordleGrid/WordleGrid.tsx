import { View } from "react-native";
import GridTile from "../GridTile/GridTile";
import useColors from "../../hooks/useColors";
import styles from "./WordleGrid.styles";
import { WordleGridProps } from "./WordleGrid.types";

export default function WordleGrid(props: WordleGridProps) {
  return (
    <View>
      <View>{generateGridTiles(props)}</View>
    </View>
  );
}

function generateGridTiles(props: WordleGridProps) {
  return props.words.map((word, wordIndex) => {
    return (
      <View style={styles.row} key={wordIndex}>
        {word.map((letter, index) => {
          return <GridTile key={index} letter={letter} />;
        })}
      </View>
    );
  });
}
