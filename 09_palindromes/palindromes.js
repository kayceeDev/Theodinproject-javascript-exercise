const palindromes = function (str) {
  // var reverseString=""; // initialize every string to ""

  //   formatted = temp.replace(/[^A-Za-z0-9]/g, '');
  let formatted = str
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("");
  let reversedString = formatted.split('').reverse().join('');

  return formatted === reversedString;
};

module.exports = palindromes;
