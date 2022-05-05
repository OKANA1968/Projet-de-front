const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a4880995fbb07d40249df7d0c03c8383";
const IMAGES_URL = "https://image.tmdb.org/t/p/w185";

let $movie_container = document.querySelector(".video__section");

function getFootballMovies(query) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((response) => showFootballMovies(response, query, 0));
}

function showFootballMovies(movies, query) {
  let moviesContainer = document.createElement("div");
  moviesContainer.setAttribute("class", "movie_container");

  movies.results.forEach((data) => {
    let movie = document.createElement("div");
    movie.setAttribute("class", "movie");
    let image = document.createElement("img");
    if (data.poster_path) {
      image.setAttribute("src", `${IMAGES_URL}${data.poster_path}`);
      movie.appendChild(image);
      movie.addEventListener("clcik", function () {
        console.log("ok");
      });
      moviesContainer.appendChild(movie);
    }
  });

  $movie_container.appendChild(moviesContainer);
}

function showInfo(movie) {
  console.log(movie);
}

getFootballMovies("football");
