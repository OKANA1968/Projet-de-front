const API_URL = "https://api.themoviedb.org/3";
const API_KEY = "a4880995fbb07d40249df7d0c03c8383";
const IMAGES_URL = "https://image.tmdb.org/t/p/";

let $movie_container = document.querySelector(".video__section");
let body = document.querySelector("body");

function getFootballMovies(query) {
  fetch(`${API_URL}/search/movie?api_key=${API_KEY}&query=${query}`)
    .then((response) => response.json())
    .then((response) => showFootballMovies(response));
}

function getMovie(id) {
  fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`)
    .then((response) => response.json())
    .then((response) => showMovie(response));
}

function showFootballMovies(movies) {
  let moviesContainer = document.createElement("div");
  moviesContainer.setAttribute("class", "movie_container");

  movies.results.forEach((data) => {
    let movie = document.createElement("div");
    movie.setAttribute("class", "movie");
    movie.setAttribute("onclick", "getMovie(" + data.id + ")");
    let image = document.createElement("img");
    let movieTitle = document.createElement("span");
    movieTitle.setAttribute("class", "movieTitle");
    if (data.poster_path) {
      image.setAttribute("src", `${IMAGES_URL}w185${data.poster_path}`);
      movieTitle.textContent = data.original_title;
      movie.appendChild(image);
      movie.appendChild(movieTitle);
      moviesContainer.appendChild(movie);
    }
  });

  $movie_container.appendChild(moviesContainer);
}

function showMovie(response) {
  let movie = document.createElement("div");
  movie.setAttribute("class", "movieOverview");
  let movieContainer = document.createElement("div");
  let movieImage = document.createElement("img");
  let movieTitle = document.createElement("p");
  let movieOverview = document.createElement("p");

  movieImage.setAttribute("class", "movieImage");
  movieTitle.setAttribute("class", "movieTitle");
  movieOverview.setAttribute("class", "movieOverviewText");

  movieImage.setAttribute("src", `${IMAGES_URL}w300${response.poster_path}`);
  movieTitle.textContent = response.original_title;
  movieOverview.textContent = response.overview;

  movieContainer.appendChild(movieImage);
  movieContainer.appendChild(movieTitle);
  movieContainer.appendChild(movieOverview);

  movie.appendChild(movieContainer);

  let closeBtn = document.createElement("span");
  closeBtn.textContent = "X";
  closeBtn.setAttribute("class", "closeBtn");
  movie.appendChild(closeBtn);
  body.appendChild(movie);

  closeBtn.addEventListener("click", function () {
    body.removeChild(movie);
  });
}

getFootballMovies("football");
