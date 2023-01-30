const nums = [
  1,
  3,
  6,
  7,
  7,
  5,
  4,
  5,
  6,
  54,
  53,
  ,
  3,
  1,
  5654,
  ,
  6,
  3,
  42,
  4,
  5,
  34,
  63,
];

const maxVal = (arr) => arr.reduce((acc, curr) => (curr > acc ? curr : acc));
console.log(maxVal(nums));

const sumEven = (arr) =>
  arr.filter((num) => num % 2 === 0).reduce((acc, curr) => acc + curr);
console.log(sumEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const avg = (arr) => arr.reduce((acc, curr) => acc + curr) / arr.length;

console.log(avg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
