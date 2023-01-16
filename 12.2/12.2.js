const candyStore = {
  candies: [
    {
      name: "mint gum",
      id: "as12f",
      price: 2,
      amount: 2,
    },
    {
      name: "twix",
      id: "5hd7y",
      price: 5,
      amount: 4,
    },
  ],
  cashRegister: 200,
};

function getCandy(candyStore, id) {
  return candyStore.candies.find((candyStore) => candyStore.id.includes(id));
}

console.log(getCandy(candyStore, "5hd7y"));

function getPrice(candyStore, id) {
  return candyStore.candies.find((candyStore) => candyStore.id === id).price;
}

console.log(getPrice(candyStore, "5hd7y"));

function addCandy(candyStore, id, name, price) {
  candyStore.candies.push({
    name: name,
    id: id,
    price: price,
    amount: 1,
  });
}

addCandy(candyStore, "324", "ff", 5);
console.log(candyStore.candies);

function buy(candyStore, id) {
  candyStore.cashRegister += candyStore.candies.find((candyStore) => candyStore.id === id).price
  candyStore.candies.find((candyStore) => candyStore.id === id).amount -= 1;
}

buy(candyStore, '324');
console.log(candyStore);
