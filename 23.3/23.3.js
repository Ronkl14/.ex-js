const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");

seconds.innerText = Number(new Date().getSeconds());
minutes.innerText = Number(new Date().getMinutes());
hours.innerText = Number(new Date().getHours());

const sec = () => {
  seconds.innerText = Number(new Date().getSeconds());
  if (seconds.innerText === '0') {
    minutes.innerText = Number(minutes.innerText) + 1;
  }
  if (minutes.innerText === '0') {
    hours.innerText = Number(hours.innerText) + 1;
  }
};

setInterval(sec, 1000);
