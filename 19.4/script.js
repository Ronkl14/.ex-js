document.body.style.backgroundColor = 'teal';

const header = document.createElement("h1");
header.innerText = "Welcome to my website!";
header.style.textAlign = "center";

const subHeader = document.createElement("h2");
subHeader.innerText = "I am Ron Klik, a (soon to be) fullstack developer";
subHeader.style.textAlign = "center";

const img = document.createElement("img");
img.src =
  "https://scontent.fhfa1-1.fna.fbcdn.net/v/t1.6435-9/125241003_4147072488640644_8252995485625506068_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=ZTda-wX4fkkAX-8i-29&_nc_ht=scontent.fhfa1-1.fna&oh=00_AfCOQOuvSxQkUjSUNfXGCSULPEJqmN7gR7DFGj7GNObhIA&oe=63F79D7F";
img.style.width = "500px";
img.style.margin = "0 auto";

const hobbies = document.createElement("p");
hobbies.innerText = "I enjoy coding, baking, live music and hiking";
hobbies.style.textAlign = "center";
hobbies.style.fontSize = "20px";

const btn = document.createElement("button");
btn.innerText = "Click here to see my Github";
btn.style.padding = "7px";
btn.style.margin = "0 auto";
btn.onclick = 'location.href ="https://github.com/Ronkl14"';

document.body.append(header);
document.body.append(subHeader);
document.body.append(img);
document.body.append(hobbies);
document.body.append(btn);
