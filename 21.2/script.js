// Create a webpage that has some text and two buttons with ‘+’
// and ‘-‘ Clicking the ‘+’ button should increase the text’s font-size
// and clicking the ‘-‘ should decrease it.
// Limit the font size to be between 6px and 100px.

const btnMinus = document.querySelector(".decrease");
const btnPlus = document.querySelector(".increase");
const text = document.querySelector("p");
let textSize = Number(getComputedStyle(text).fontSize.replace('px',''));
console.log(textSize);

btnMinus.addEventListener("click", function () {
    if (textSize > 6) {
        textSize -= 1;
        text.style.fontSize = `${textSize}px`;
    }
});

btnPlus.addEventListener("click", function () {
    if (textSize < 100) {
        textSize += 1;
        text.style.fontSize = `${textSize}px`;
    }
});