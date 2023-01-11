const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const arrSentence = array.join(' ').toLowerCase();
console.log(arrSentence);

const letters = {};

for (let i = 0; i < arrSentence.length; i++) {
  if (arrSentence[i] === ' ') {
    continue;
  }
  letters[arrSentence[i]] === undefined ? letters[arrSentence[i]] = 1 : letters[arrSentence[i]] += 1;
}

console.log(letters);