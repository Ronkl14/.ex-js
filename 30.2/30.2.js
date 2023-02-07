const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const poster = document.querySelector(".poster");
const movieNamee = document.querySelector(".movie-name");
const genre = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");
const IMDB = document.querySelector(".IMDB");
const metacritic = document.querySelector(".metacritic");
const rotten = document.querySelector(".rotten");

async function getMovie(movieName) {
  input.value = "";
  const movieRes = await fetch(
    `http://www.omdbapi.com/?apikey=6de92109&t=${movieName}`
  );
  const movieDet = await movieRes.json();
  poster.setAttribute("src", `${movieDet.Poster}`);
  movieNamee.innerHTML = movieDet.Title;
  genre.innerHTML = movieDet.Genre;
  year.innerHTML = movieDet.Year;
  plot.innerHTML = movieDet.Plot;
  director.innerHTML = movieDet.Director;
  actors.innerHTML = movieDet.Actors;
  IMDB.innerHTML = movieDet.Ratings[0].Value;
  metacritic.innerHTML = movieDet.Ratings[1].Value;
  rotten.innerHTML = movieDet.Ratings[2].Value;
  console.log(movieName);
}

submit.addEventListener("click", function () {
  const movieInput = input.value;
  getMovie(movieInput);
});
