import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchSearchMovie } from 'services/movies-api';

export const useFetchSearchMovies = () => {
  const [movies, setMovies] = useState();
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    (async () => {
      try {
        const { results } = await fetchSearchMovie(query);

        if (!results.length) {
          toast.error('There are no movies for your request.');
          return;
        }

        setMovies(results);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    })();
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();

    if (e.target.elements.text.value === '') {
      toast.error('Please enter a movie name');
      return;
    }

    const el = e.currentTarget;

    setSearchParams({
      query: el.elements.text.value.trim(),
    });

    el.reset();
  };

  return {
    movies,
    location,
    isError,
    handleSubmit,
  };
};
