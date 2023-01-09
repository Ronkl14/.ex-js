function percentageOfWorld1(population) {
  let perc = (population / 7.9e9) * 100;
  console.log(`the population is ${perc}% of world population`);
}

percentageOfWorld1(4e9);
percentageOfWorld1(99e3);
percentageOfWorld1(99e13);

const percentageOfWorld2 = function (population) {
  let perc = (population / 7.9e9) * 100;
  console.log(`the population is ${perc}% of world population`);
};

percentageOfWorld2(4e9);
percentageOfWorld2(99e3);
percentageOfWorld2(99e13);
