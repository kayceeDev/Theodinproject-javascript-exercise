const sumAll = function (startIndex, endIndex) {
  let firstIndex;
  let secondIndex;
  let sum = 0;
  if (
    typeof startIndex !== "number" ||
    typeof endIndex !== "number" ||
    startIndex < 0 ||
    endIndex < 0
  ) {
    return "ERROR";
  }

  if (startIndex < endIndex) {
    firstIndex = startIndex;
    secondIndex = endIndex;
  } else {
    firstIndex = endIndex;
    secondIndex = startIndex;
  }
  for (let i = firstIndex; i <= secondIndex; i++) {
    sum += i;
  }

  return sum;
};

console.log(sumAll(4, 1));

module.exports = sumAll;
