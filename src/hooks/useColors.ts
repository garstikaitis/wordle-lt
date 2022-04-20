import useRandomNumber from "./useRandomNumber";

export default function useColors() {
  const possibleColors = [
    "#e0e0e0",
    "#ffc400",
    "#e60039",
    "#00a846",
    "#8f8f8f",
  ];
  const randomNumber = useRandomNumber(5);
  return possibleColors[randomNumber];
}
