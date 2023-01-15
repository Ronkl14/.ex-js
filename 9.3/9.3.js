const food = [
  "Noodle",
  "Pasta",
  "Hamburgers"

];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const similar = (arr, arr2) => {
  const similarArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      arr[i] === arr2[j] ? similarArr.push(arr[i]) : "";
    }
  }
  if (similarArr.length === 0) {
    return false;
  }
  return similarArr;
};

console.log(similar(food, food1));
