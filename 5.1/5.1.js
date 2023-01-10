const countryToLiveIn = (country, population, isIsland, language) => {
  if (String(language) === "english" && Number(population) < 50e6 && !isIsland) {
    return `You should live in ${country}`;
  } else {
    return `${country} does not meet your criteria`;
  }
};

console.log(countryToLiveIn('isk', '2000', false, 'english'));