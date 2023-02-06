const makeAllCaps = (arr) => {
  return new Promise((resolve, reject) => {
    if (arr.every((word) => word.match(/^[a-z]+$/i))) {
      resolve(arr);
    } else {
      reject();
    }
  })
    .then((arr) => sortWords(arr.map((element) => element.toUpperCase())))
    .catch(() => "not all elements are words");
};

const sortWords = (arr) => {
  return new Promise((resolve, reject) => {
    resolve(arr);
  }).then((arr) => arr.sort());
};

makeAllCaps(["hi", "yo", "science", "banana", "apple"])
  .then((result) => console.log(result))
  .catch(() => console.log("not all elements are words"));
makeAllCaps(["99", "falafel", "good"])
  .then((result) => console.log(result))
  .catch(() => console.log("not all elements are words"));

// const arr = ["hi", "yo", "yes"];
// const arr2 = arr.map((el) => el.toUpperCase());
// console.log(arr);
// console.log(arr2);
