//block1
function funcA() {
  console.log(a); //undefined - global variable
  console.log(foo()); //2 - because the function is declared below
  var a = 1;
  function foo() {
    return 2;
  }
}
// console.log(funcA());
// funcA();

//block2
var fullName = "John Doe";
var obj = {
  fullName: "Colin Ihrig",
  prop: {
    fullName: "Aurelio De Rosa",
    getFullName: function () {
      return this.fullName;
    },
  },
};
// console.log(obj.prop.getFullName()); //Aurelio De Rosa
var test = obj.prop.getFullName; //function
// console.log(typeof test);
// console.log(test);
// console.log(test()); //undefined
// console.log(obj.prop.test);

//block3
function funcB() {
  let a = (b = 0);
  a++;
  return a;
}
funcB();
// console.log(typeof a); //undefined
// console.log(typeof b); //number

//block4
function funcC() {
  console.log("1");
}
// funcC(); //2
function funcC() {
  console.log("2");
}
// funcC(); //2
//hoisting declares both function, second func overrides first
//if we used func expression with let/const we would get an error

//block5
function funcD1() {
  d = 1;
}
funcD1();
// console.log(d); //1
function funcD2() {
  var e = 1;
}
funcD2();
// console.log(e); //error

//block6
function funcE() {
  console.log("Value of f in local scope: ", f); //undefined
}
console.log("Value of f in global scope: ", f); //1
var f = 1;
funcE();

//var can go up to the first call
