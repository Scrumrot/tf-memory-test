export function arrayFromNumber(length): number[] {
  return [...Array(length).keys()];
}

export function getRandomInt(_max: number): number {
  let min = 0;
  const max = Math.floor(_max);
  return Math.floor(Math.random() * (max - min)) + min;
}
