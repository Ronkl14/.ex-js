const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const avatar = document.querySelector(".avatar");
const username = document.querySelector(".username");
const repoNum = document.querySelector(".repo_num");

async function getUser(userInput) {
  const response = await fetch(`https://api.github.com/users/${userInput}`);
  const user = await response.json();
  input.value = "";
  avatar.setAttribute("src", `${user.avatar_url}`);
  username.innerHTML = user.name;
  repoNum.innerHTML = `${user.public_repos} public repos`;
}

submit.addEventListener("click", function () {
  const userInput = input.value;
  getUser(userInput);
});
