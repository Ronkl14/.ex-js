function calcAverage(arr) {
//   var sum; 
//sum isn't initialized to a value
let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
//   return sum;
// to return average there you need to divide by number of elements
return sum/arr.length;
}
calcAverage([85, 90, 92]);
