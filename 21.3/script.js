const textArea = document.querySelector("textarea");
const charNum = document.querySelector("span");
charNum.innerText = 100;

const btn = document.querySelector("button");
const text = document.querySelector("p");

textArea.addEventListener("input", function () {
  if (charNum.innerText > 0) {
    charNum.innerText = 100 - textArea.value.length;
  }
  text.style.color = 'black';
  text.style.fontWeight = '400';
});

btn.addEventListener("click", function () {
    if (charNum.innerText <= 0) {
        textArea.value = '';
        text.innerText = 'Thank you for applying';
    }
    else {
        text.style.color = 'red';
        text.style.fontWeight = 'bold';
    }
});
