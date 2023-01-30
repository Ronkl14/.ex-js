// console.log(this);
//window

const myObj = {
  name: "Timmy",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};
// myObj.greet();
//window - because arrow function don't have this property, need to change to func declaration

const myFuncDec = function () {
  console.log(this);
};
//window

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
//window - because arrow func dont have this property

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
//arrow function don't have this property, need to change to declaration