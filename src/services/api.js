import axios from "axios";

const API_KEY = "7161e098094ca42f0e611483c383ebb9";
const BASE_API = "https://api.themoviedb.org/3/";

const popularMovies = async () => {
  const res = await axios.get(`${BASE_API}trending/all/day?api_key=${API_KEY}`);
  return res.data.results;
};

const moviesDetails = async (movieId) => {
  const res = await axios.get(
    `${BASE_API}movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  return res.data;
};
const moviesCast = async (movieId) => {
  const res = await axios.get(
    `${BASE_API}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  return res.data.cast;
};

const moviesReviews = async (movieId) => {
  const res = await axios.get(
    `${BASE_API}movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`
  );
  return res.data.results;
};

const searchMovies = async (query) => {
  const res = await axios.get(
    `${BASE_API}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`
  );

  return res.data.results;
};
export {
  popularMovies,
  moviesDetails,
  moviesCast,
  moviesReviews,
  searchMovies,
};
