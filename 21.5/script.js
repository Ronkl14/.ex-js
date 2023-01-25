const input = document.querySelector("input");
const btn = document.querySelector("button");

const container = document.querySelector(".img-container");

btn.addEventListener("click", function () {
  container.textContent = "";
  if (Number(input.value)) {
    for (let i = 0; i < Number(input.value); i++) {
      const img = document.createElement("img");
      img.src = "img/smiley.png";
      img.style.width = "10%";
      container.appendChild(img);
    }
  } else {
    const errorMsg = document.createElement("p");
    errorMsg.innerText = "Dude, insert a number";
    container.appendChild(errorMsg);
  }
});
