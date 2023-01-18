// //block 1

// var b = 1;
// function someFunction(number) {
//   function otherFunction(input) {
//     return b;
//   }
//   b = 5;
//   return otherFunction;
// }
// var firstResult = someFunction(9); //5
// // console.log(firstResult(9));
// var result = firstResult(2); //5
// // console.log(firstResult(2));

// // -----------------------------------------------------

// //block 2

// var a = 1;
// function b2() {
//   a = 10;
//   return;
//   function a() {}
// }
// b2();
// console.log(a); //1
// //a is declared as a function when func b2 is called
// //function b2 does not return function a
// //therefor, when we log a it returns the var before the function
// //because the function a is not in the scope

// // -----------------------------------------------------

//block 3

let i;
for (i = 0; i < 3; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 100);
}

// ----------------------------------------------------




