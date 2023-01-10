const populations = [23e2, 34e7, 347e6, 99e7];

const populationPercentages = (populations) => {
  const percentages = [];

  const percentageOfWorld = (population) => (population / 7.9e9) * 100;

  for (let i = 0; i < populations.length; i++) {
    percentages[i] = percentageOfWorld(populations[i]);
  }

  return percentages;
};

console.log(populationPercentages(populations));
