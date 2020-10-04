const { isUpperCase } = require('./utils');

const MODULO = 26;
const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

const encrypt = (char, shift, action) => {
  let shiftCharIndex;
  let result;

  shiftCharIndex = ALPHABET.indexOf(char.toUpperCase());
  if (shiftCharIndex !== -1) {
    switch (action) {
      case 'encode':
        shiftCharIndex += shift;
        break;
      case 'decode':
        shiftCharIndex -= shift;
        if (shiftCharIndex < 0) {
          shiftCharIndex = ALPHABET.length - Math.abs(shiftCharIndex);
        }
        break;
      default:
        break;
    }
    const soughtCharIndex = Math.abs(shiftCharIndex) % MODULO;
    result = ALPHABET[soughtCharIndex];

    if (!isUpperCase(char)) {
      result = result.toLowerCase();
    }

    return result;
  }
  return char;
};

const encryption = (input, shift, action) => {
  let output = '';
  for (const char of input) {
    output += encrypt(char, +shift, action);
  }
  return output;
};

module.exports = {
  encryption,
  encrypt
};
