export interface WordleGridProps {
  activeRowIndex: number;
  currentWord: string;
  words: Letter[][];
  activeLetterIndex: number;
}

export interface Letter {
  letter: string;
  isInWord: boolean;
  isTouched: boolean;
  isInCorrectPlace: boolean;
}
