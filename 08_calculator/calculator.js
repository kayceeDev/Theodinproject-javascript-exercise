const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  return n === 1 || n ===0 ?  1 : n * factorial(n - 1);
  
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
