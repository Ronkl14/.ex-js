let td = document.querySelectorAll("td");

document.addEventListener("keyup", function (e) {
  console.log(e.key);
  if (e.key === "c") {
    for (let i = 0; i < td.length - 1; i++) {
      if (td[i].classList.contains("active")) {
        td[i].classList.remove("active");
        td[i + 1].classList.add("active");
        break;
      }
    }
  }
});
