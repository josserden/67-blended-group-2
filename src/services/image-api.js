import axios from 'axios';

const API_KEY = `33583832-ef5cd451b2a0e1292cdfe78fd`;

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (searchQuery, page) => {
  const {
    data: { hits, totalHits },
  } = await axios.get(`/?q=${searchQuery}&page=${page}`);

  return { hits, totalHits };
};
