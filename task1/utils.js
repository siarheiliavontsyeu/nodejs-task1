const isUpperCase = char => {
  return char === char.toUpperCase();
};

const isPositiveInt = value => {
  return parseInt(value, 10) && value > 0;
};

const isPermittedActionValue = action => {
  if (['encode', 'decode'].includes(action)) {
    return action;
  }
  return false;
};

module.exports = {
  isUpperCase,
  isPositiveInt,
  isPermittedActionValue
};
