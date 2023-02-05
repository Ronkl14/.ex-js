// Create an object with a name property. The object should
// also have a method that prints its name and another method
// that prints its name after a second with the help of setTimeOut.
// in this exercise, you are not allowed to use arrow functions.

const obj = {
  name: "melafefon",
  printName: function () {
    return this.name;
  },
  printNameDelayed: function () {
    const printNameBound = this.printName.bind(obj);
    const logPrintNameBound = function () {
      console.log(printNameBound());
    };
    setTimeout(logPrintNameBound, 1000);
  },
};

console.log(obj.printName());
obj.printNameDelayed();
