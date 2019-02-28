import clamp from 'lodash/clamp';

const MAX_COLOR_NUMBER = 230;
const MIN_COLOR_NUMBER = 0;
const FIRST_CHAR_NUMBER = 65;
const FACTOR = 8;
const DEFAULT_INITIALS = 'AA';

const getColorFromInitials = (initials) => {
  const numbers = `${initials}${DEFAULT_INITIALS}`
    .split('')
    .map(char => char.charCodeAt(0))
    .map(number => (number - FIRST_CHAR_NUMBER + 1) * FACTOR)
    .map(number => clamp(number, MIN_COLOR_NUMBER, MAX_COLOR_NUMBER));

  const rgb = [
    MAX_COLOR_NUMBER - numbers[0],
    MAX_COLOR_NUMBER - numbers[1],
    ((numbers[0] + numbers[1]) / 2),
  ].join(',');

  return `rgb(${rgb})`;
};

export default getColorFromInitials;
