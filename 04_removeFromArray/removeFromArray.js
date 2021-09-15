const removeFromArray = function (arr, ...args) {
  let itemIndex = 0;
  let itemTwoIndex = 0;

  //   if (!arr.includes(item1)) {
  //     arr.splice(itemOneIndex, 0);
  //   } else {
  //     itemOneIndex = arr.findIndex((item) => item === item1);
  //     arr.splice(itemOneIndex, 1);
  //   }

  //   if (!arr.includes(item2)) {
  //     arr.splice(itemTwoIndex, 0);
  //   } else {
  //     itemTwoIndex = arr.findIndex((item) => item === item2);
  //     arr.splice(itemTwoIndex, 1);
  //   }
  //   return arr;
  let newArray = [...args];
  for (let index = 0; index < newArray.length; index++) {
    let itemToRemove = newArray[index];
    if (arr.includes(itemToRemove)) {
      itemIndex = arr.findIndex((item) => item === itemToRemove);
      arr.splice(itemIndex, 1);
    }
  }
  return arr;
};

module.exports = removeFromArray;
