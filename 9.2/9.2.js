const lengths = (arr) => {
  const arrLen = [];
  let i = 0;
  while (i < arr.length) {
    arrLen[i] = arr[i].length;
    i++;
  }
  return arrLen;
};

console.log(lengths(["asasda", "ad", "dfbv"]));

//using a for loop in this case is better because with the while loop
//we defined the i exactly like we do in for loops but outside of the loop
