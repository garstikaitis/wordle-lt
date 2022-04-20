export default function useRandomNumber(max: number) {
  let rand = Math.random() * max;
  rand = Math.floor(rand);
  return rand;
}
