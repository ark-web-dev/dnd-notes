import { getRandomValue } from './getRandomValue';

export const generateRGBColor = (from: number, to: number): string => {
  let red = getRandomValue(from, to);
  let green = getRandomValue(from, to);
  let blue = getRandomValue(from, to);

  return `rgb(${red},${green},${blue})`;
};
