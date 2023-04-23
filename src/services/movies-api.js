import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
axios.defaults.params = {
  api_key: '11546a486a09144867cb90a93b48d542',
};

export const fetchTrendingMovie = async () => {
  const { data } = await axios.get('3/trending/movie/day');
  return data;
};

export const fetchSearchMovie = async query => {
  const { data } = await axios.get(`3/search/movie?&query=${query}`);
  return data;
};

export const fetchDetailsMovie = async movieId => {
  const { data } = await axios.get(`3/movie/${movieId}?`);
  return data;
};

export const fetchCastMovie = async movieId => {
  const { data } = await axios.get(`3/movie/${movieId}/credits?`);
  return data;
};

export const fetchReviewsMovie = async movieId => {
  const { data } = await axios.get(`3/movie/${movieId}/reviews?`);
  return data;
};
