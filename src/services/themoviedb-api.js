import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const API_KEY = '4ed08c59af0bfce2d3d8e222d97a6257';
const popularStep = 'trending/movie/day';

export const fetchToHome = async () => {
  const response = await axios.get(`${popularStep}?api_key=${API_KEY}`);
  return response.data;
};
