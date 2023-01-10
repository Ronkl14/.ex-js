const people = ["Greg", "Mary", "Devon", "James"];
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

people.shift();
people.pop();
people.unshift("Matt");
people.push("Ron");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === 'Mary') {
        break;
    }
}

const peopleCopy = people.slice(2);
console.log(peopleCopy);

const maryIndex = people.indexOf('Mary');
console.log(maryIndex);

const fooIndex = people.indexOf('foo');
console.log(fooIndex);
