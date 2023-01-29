// Create a webpage that has a form (asks the user for its name,
//     age, and email address) and when the user clicks submit, open
//     a text window that writes all the information and asks for his
//     confirmation. If he clicks on the confirm button, tell him
//     “congratulations you successfully sent this form” if he clicks on
//     change information, give him the possibility to change the
//     information, and ask again for his confirmation.

const form = document.querySelector("form");
const userName = document.querySelector(".name");
const age = document.querySelector(".age");
const email = document.querySelector(".email");
const submit = document.querySelector(".submit");
const newWindow = document.querySelector(".confirmation");
const nameConf = document.querySelector(".name-conf");
const ageConf = document.querySelector(".age-conf");
const emailConf = document.querySelector(".email-conf");
const confirmBTN = document.querySelector(".confirm");
const changeBTN = document.querySelector(".change");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  newWindow.classList.toggle("hide");
  nameConf.innerText = `Name: ${userName.value}`;
  ageConf.innerText = `Age: ${age.value}`;
  emailConf.innerText = `Email: ${email.value}`;
});

confirmBTN.addEventListener("click", function () {
  newWindow.innerText = "Submitted successfully";
});

changeBTN.addEventListener("click", function () {
  newWindow.classList.toggle("hide");
});
