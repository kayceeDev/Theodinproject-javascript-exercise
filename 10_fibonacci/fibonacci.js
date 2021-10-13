const fibonacci = function (n) {
  if (n < 0) {
    return "OOPS";
  }
  if (typeof n === "string" || typeof n === "number") {
    if (+n === 0 || +n === 1) {
      return 1;
    }
    let n1 = 0,
      n2 = 1,
      nextTerm;

    for (let i = 1; i <= +n; i++) {
      if (i === n - 1) {
        return n1 + n2;
      } else {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
      }
    }
  }
};

console.log(fibonacci("1"));

module.exports = fibonacci;
