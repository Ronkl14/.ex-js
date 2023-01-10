const arr = [4, 4, 6, 7, 4, 3, 7, 7, 7, 5, 3, 5, 9, 9, 1];

const removeDup = (arr) => {
  const noDupArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.indexOf(arr[i])) {
      noDupArr.push(arr[i]);
    }
  }
  return noDupArr;
};

console.log(removeDup(arr));
