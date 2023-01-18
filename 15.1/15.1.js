function getSum(arr1, arr2) {
  //   const sum = 0; - error changing const value
  let sum = 0;
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }
  console.log(sum); //added clg
}
getSum([1, 2, 3], [5, 66, 23]); 
//added coma - this caused the function to get only 1 arg instead of 2.
//removed parenthesis from arr2 - this caused length to be 1 instead of 3.
//debugged used vscode internal debugger