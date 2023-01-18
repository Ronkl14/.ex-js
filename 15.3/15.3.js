function getSumOfEven(arr) {
  return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
  //arr[10] doesn't exist because indexes start at 0
  //because initial index is 0, the even numbers will be at
  //1,3,5,7,9
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
