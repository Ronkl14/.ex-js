const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];

const sortAsc = foods.sort();
console.log(sortAsc);

const sortDes = sortAsc.reverse();
console.log(sortDes);

const foodsWithUpperCase = [
  "falafel",
  "Sabich",
  "Hummus",
  "pizza with extra pineapple",
];

// sortAsc2 = foodsWithUpperCase.map((food) => food.toLowerCase()).sort();
// console.log(sortAsc2);

const sortAsc2Good = foodsWithUpperCase.sort(function (a, b) {
  return a.toLowerCase().localeCompare(b.toLowerCase());
});
console.log(sortAsc2Good);

const sortDes2 = sortAsc2Good.reverse();
console.log(sortDes2);

const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const sortLen = words.sort((a, b) => b.length - a.length);
console.log(sortLen);
