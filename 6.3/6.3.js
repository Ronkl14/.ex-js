const lengths = (arr) => {
  const arrLen = [];
  for (i = 0; i < arr.length; i++) {
    arrLen[i] = arr[i].length;
  }
  return arrLen;
};

console.log(lengths(["asasda", "ad", "dfbv"]));
