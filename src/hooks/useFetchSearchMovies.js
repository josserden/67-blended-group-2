import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';

import { fetchSearchMovie } from 'services/movies-api';

export const useFetchSearchMovies = () => {
  const [movies, setMovies] = useState();
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [isError, setIsError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query' ?? '');

  const location = useLocation();

  useEffect(() => {
    if (!query) return;

    (async () => {
      try {
        const { results, total_pages } = await fetchSearchMovie(query, page);

        if (!results.length) {
          toast.error('There are no movies for your request.');
          return;
        }

        setTotalResults(total_pages);
        setMovies(results);
        setPage(page);
      } catch (error) {
        console.error(error);
        setIsError(true);
      }
    })();
  }, [page, query]);

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

  const handleChange = (event, value) => {
    toast.success(`Page ${value} was loaded`);
    setPage(value);
  };

  return {
    movies,
    page,
    location,
    isError,
    totalResults,
    handleSubmit,
    handleChange,
  };
};
