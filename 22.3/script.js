const hidden = document.querySelector(".hidden-letter");
const guessed = document.querySelector(".guessed");
const correct = document.querySelector(".correct-msg");

let randomLetter = String.fromCharCode(97 + Math.floor(Math.random() * 26));
console.log(randomLetter);

document.addEventListener("keyup", function (e) {
  let letter = e.key;
  console.log(letter);
  if (letter === randomLetter) {
    hidden.innerText = letter;
    hidden.classList.toggle("green");
    correct.classList.toggle('hide');
  }
  else {
    guessed.innerText += (' ' + letter);
  }
});
