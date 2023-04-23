import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import { fetchDetailsMovie } from 'services/movies-api';

export const useFetchDetailsMovie = () => {
  const [movie, setMovie] = useState({});
  const [isError, setIsError] = useState(false);

  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      try {
        const result = await fetchDetailsMovie(movieId);
        setMovie(result);
      } catch (error) {
        setIsError(true);
        console.error(error);
      }
    })();
  }, [movieId]);

  return {
    movie,
    location,
    isError,
  };
};
