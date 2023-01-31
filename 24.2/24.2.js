function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.name = pokemonName;
  this.type = pokemonType;
  this.attackList = pokemonAttackList;
  this.callPokemon = function () {
    console.log(`I choose you, ${pokemonName}!`);
  };
  this.attack = function (attackNum) {
    console.log(`${pokemonName} used ${pokemonAttackList[attackNum]}`);
  };
}

const pikachu = new Pokemon("pikachu", "electricity", [
  "elecrify",
  "die",
  "yawn",
]);

pikachu.callPokemon();
pikachu.attack(1);