// 1. Build your own filter method with the help of prototypes
// 2. Build your own find method with the help of prototypes

Array.prototype.filterAlt = function (callbackFn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      newArr.push(this[i]);
    }
  }
  return newArr;
};

Array.prototype.findAlt = function (callbackFn) {
  for (let i = 0; i < this.length; i++) {
    if (callbackFn(this[i])) {
      return this[i];
    }
  }
};

