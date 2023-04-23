import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '11546a486a09144867cb90a93b48d542',
};

export const fetchTrendingMovie = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

export const fetchSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `/search/movie?&query=${query}&page=${page}`
  );
  return data;
};

export const fetchDetailsMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}?`);
  return data;
};

export const fetchCastMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/credits?`);
  return data;
};

export const fetchReviewsMovie = async movieId => {
  const { data } = await axios.get(`/movie/${movieId}/reviews?`);
  return data;
};
