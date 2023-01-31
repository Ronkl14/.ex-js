const min = document.querySelector(".min");
const sec = document.querySelector(".sec");
const mili = document.querySelector(".mili");

const start = document.querySelector(".start");
const stop1 = document.querySelector(".stop");
const clear = document.querySelector(".clear");

min.innerText = Number(0);
sec.innerText = Number(0);
mili.innerText = Number(0);

const startTimer = () => {
  mili.innerText = Number(mili.innerText) + 1;
  if (mili.innerText === "1000") {
    mili.innerText = 0;
  }
  if (mili.innerText === "0") {
    sec.innerText = Number(sec.innerText) + 1;
    if (sec.innerText === "60") {
      sec.innerText = 0;
      min.innerText = Number(min.innerText) + 1;
    }
  }
};

let interval;

start.addEventListener("click", function () {
  interval = setInterval(startTimer, 1);
  start.disabled = true;
});

stop1.addEventListener("click", function () {
  clearInterval(interval);
  start.disabled = false;
});

clear.addEventListener("click", function () {
  min.innerText = Number(0);
  sec.innerText = Number(0);
  mili.innerText = Number(0);
  clearInterval(interval);
  start.disabled = false;
});
