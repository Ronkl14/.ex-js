arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
arr2 = ["hamburger", "big mac", "whopper", "capybara"];

const doubleValues = (arr) => {
  let arr2 = arr.map(function (n) {
    return n * 2;
  });
  return arr2;
};

console.log(doubleValues(arr));

const onlyEvenValues = (arr) => {
  let arr2 = arr
    .map(function (n) {
      return n % 2 === 0 ? n : "";
    })
    .filter((num) => num);
  return arr2;
};

console.log(onlyEvenValues(arr));

const showFirstAndLast = (arr) => {
  let arr2 = [];
  arr2.push(arr[0], arr[arr.length - 1]);
  return arr2;
};

console.log(showFirstAndLast(arr2));

const vowelCount = (str) => {
  str = str.split("");
  const vowels = "aioeuy";
  let obj = {};
  str.forEach(function (char) {
    if (vowels.includes(char)) {
      if (!obj[char]) {
        obj[char] = 1;
      } else {
        obj[char] += 1;
      }
    }
  });
  return obj;
};

console.log(vowelCount("so long and thanks for the fish"));

const capitalize = (str) => {
  const capi = str
    .split("")
    .map(function (char) {
      return char.toUpperCase();
    })
    .join("");
  return capi;
};

console.log(capitalize("so long and thanks for the fish"));

const shiftLetters = (str) => {
  const shifted = str
    .split("")
    .map(function (char) {
      return String.fromCharCode(char.charCodeAt(0) - 1);
    })
    .join("");
  return shifted;
};

console.log(shiftLetters("bcdefghijklmo"));

const swapCase = (str) => {
  const swapped = str.split(" ").map(function (word, idx) {
    return idx%2 === 0 ? word.toUpperCase() : word;
  }).join(' ');
  return swapped;
};

console.log(
  swapCase(
    "never gonna give you up never gonna let you down never gonna run around and hurt you"
  )
);
