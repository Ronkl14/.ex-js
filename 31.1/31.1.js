async function getStarWarsCharacters() {
  const characterArray = [];
  for (let i = 1; i <= 10; i++) {
    const res = await fetch(`https://swapi.dev/api/people/${i}/`);
    const character = await res.json();
    const planetRes = await fetch(character.homeworld);
    const planet = await planetRes.json();
    characterArray.push({
      name: character.name,
      height: character.height,
      hair_color: character.hair_color,
      planet: {
        name: planet.name,
        population: planet.population,
      },
    });
  }
  createTable(characterArray);
}

function createTable(characterArray) {
  const table = document.createElement("table");
  const header = table.createTHead();
  const headerRow = header.insertRow();
  const headers = [
    "Name",
    "Height",
    "Hair Color",
    "Planet Name",
    "Planet Population",
  ];
  headers.forEach((header) => {
    const th = document.createElement("th");
    const text = document.createTextNode(header);
    th.appendChild(text);
    headerRow.appendChild(th);
  });
  const body = table.createTBody();
  characterArray.forEach((character) => {
    const row = body.insertRow();
    const name = row.insertCell();
    name.innerHTML = character.name;
    const height = row.insertCell();
    height.innerHTML = character.height;
    const hairColor = row.insertCell();
    hairColor.innerHTML = character.hair_color;
    const planetName = row.insertCell();
    planetName.innerHTML = character.planet.name;
    const planetPopulation = row.insertCell();
    planetPopulation.innerHTML = character.planet.population;
  });
  document.body.appendChild(table);
}

getStarWarsCharacters();
