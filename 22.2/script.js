const img = document.querySelector("img");
const checkBox = document.querySelector("input");

checkBox.addEventListener("input", function () {
  img.classList.toggle("hide");
});
