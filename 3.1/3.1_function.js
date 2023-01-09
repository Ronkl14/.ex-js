/*
JavaScript - Declaring Functions
The following exercise contains the following
subjects:
* functions
Instructions
* Please reformat the following function
declarations to function expression.
* Please reformat the following function
expressions to function declarations.
Submit the file to Hive
*/
// From function declarations to function expressions

const welcome = function(){
  let welcome = "Welcome to Appleseeds Bootcamp!";
  return welcome;
}
console.log(welcome());

const power = function(a) {
  let myNumber = a;
  let result = Math.pow(myNumber, 2);
  return result;
}
console.log(power(2));

const add = function(a, b = 5) {
  let myNumber = a;
  let sum = myNumber + b;
  return sum;
}
console.log(add(2));

// From function expressions to function declarations
function hello() { 
    return "Hello!";
}
console.log(hello());

function squareRoot(a){
    return Math.sqrt(a);
}
console.log(squareRoot(4));

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}
console.log(randomNumbers(4,8));

