// 1. What is wrong with the code? explain in your own words
// 2. Fix the code so that invoking the whoIsStronger function
// will print "I am stronger".
// note: you cannot change the 'hero' or the whoIsStronger
// function.

const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
function whoIsStronger(getStrength) {
  // console.log(this);
  //   console.log(getStrength());
  //   console.log(hero.getStrength());
  const myStrength = 82;
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}

// console.log(whoIsStronger(hero.getStrength));
// console.log(hero.getStrength());
// console.log(whoIsStronger.call(this, hero.getStrength));
// console.log(whoIsStronger.call(this, hero.getStrength.bind(hero)));

// console.log(hero.getStrength())
// console.log(hero.getStrength.bind(hero))

const getStr = hero.getStrength.bind(hero);
console.log(getStr());
console.log(whoIsStronger(getStr));
console.log(whoIsStronger.call(this, getStr));
console.log(whoIsStronger.apply(this, [getStr]));
