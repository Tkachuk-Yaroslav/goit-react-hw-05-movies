import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '4ed08c59af0bfce2d3d8e222d97a6257';
const popularStep = 'trending/movie/day';
const moviesPageStep = 'search/movie';
const movieByIdStep = 'movie';

export const fetchToHome = async () => {
  const response = await axios.get(`${popularStep}?api_key=${API_KEY}`);
  return response.data;
};

export const fetchInMoviesPage = async query => {
  const response = await axios.get(
    `${moviesPageStep}?api_key=${API_KEY}&query=${query}`
  );
  return response.data;
};

export const fetchMovieById = async movieId => {
  const response = await axios.get(
    `${movieByIdStep}/${movieId}?api_key=${API_KEY}`
  );
  return response.data;
};

export const fetchDetailsCast = async movieId => {
  const response = await axios.get(
    `movie/${movieId}/credits?api_key=${API_KEY}`
  );
  return response.data;
};
