const myCountry = {
    countryName: 'Israel',
    population: 7,
    language: 'Hebrew',
    capital: 'Jerusalem',
    neighbors: ['Jordan', 'Egypt', 'Lebanon', 'Syria'],
    isIsland: null,
    describe() {
        return `${this.countryName} has ${this.population} million people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighbors and a capital called ${this.capital}`;
    },
    checkIsland() {
        this.neighbors.length === 0 ? this.isIsland = true : this.isIsland = false; 
    }
}

console.log(myCountry.describe());
myCountry.checkIsland();
console.log(myCountry.isIsland);