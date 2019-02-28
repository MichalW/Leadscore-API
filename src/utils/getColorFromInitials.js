const MAX_COLOR_NUMBER = 240;
const FIRST_CHAR_NUMBER = 65;
const BRIGHTNESS = -25;
const FACTOR = 8;

const getColorFromInitials = (initials = '') => {
  const numbers = `${initials}`
    .split('')
    .map(char => char.charCodeAt(0))
    .map(code => (code - FIRST_CHAR_NUMBER) * FACTOR);

  const rgb = [
    MAX_COLOR_NUMBER - numbers[0] + BRIGHTNESS,
    MAX_COLOR_NUMBER - numbers[1] + BRIGHTNESS,
    ((numbers[0] + numbers[1]) / 2) + BRIGHTNESS,
  ].join(',');

  return `rgb(${rgb})`;
};

export default getColorFromInitials;
