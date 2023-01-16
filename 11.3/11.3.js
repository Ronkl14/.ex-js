const data = [
  {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
      meats: ["hamburgers", "sausages"],
      fish: ["salmon", "pike"],
    },
  },
  {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
      meats: ["hamburgers", "steak", "lamb"],
      fish: ["tuna", "salmon", "barracuda"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["ham", "chicken"],
      fish: ["pike"],
    },
  },
  {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
      meats: ["bird", "rooster"],
      fish: ["salmon"],
    },
  },
  {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
      meats: ["hamburgers", "lamb"],
      fish: ["anchovies", "tuna"],
    },
  },
];

const names = data.map(function (data) {
  return data.name;
});

console.log(names);

const before90 = data
  .map(function (data) {
    return data.birthday.slice(data.birthday.length - 4, data.birthday.length) <
      1990
      ? data
      : "";
  })
  .filter((data) => data);

console.log(before90);

const foodCount = (data) => {
  const foods = data.map(function (data) {
    const meats = data.favoriteFoods.meats;
    const fish = data.favoriteFoods.fish;
    const foods = meats.concat(fish);
    return foods;
  });
  const allFood = [].concat(...foods);
  let obj = {};
  allFood.forEach(function (food) {
    !obj[food] ? obj[food] = 1 : obj[food] += 1;
  });
  return obj;
};

console.log(foodCount(data));

