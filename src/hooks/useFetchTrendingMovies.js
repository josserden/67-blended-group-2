import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { fetchTrendingMovie } from 'services/movies-api';

export const useFetchTrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const { results } = await fetchTrendingMovie();

        setMovies(results);
      } catch (error) {
        setIsError(true);
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    movies,
    location,
    isLoading,
    isError,
  };
};
