const start = document.querySelector(".start-here");
console.log(start);

start.innerText = "main title";

const li4 = document.createElement("li");
console.log(li4);
li4.innerText = "sub title 4";

const lists = document.querySelectorAll("ul");
lists[1].appendChild(li4);
lists[0].removeChild(lists[0].lastElementChild);

const title = document.querySelector('title');
title.innerText = 'Master of the DOM';

const paragraph = document.querySelector('p');
paragraph.innerText = 'I like trains';