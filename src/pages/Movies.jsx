import { useFetchSearchMovies } from 'hooks/useFetchSearchMovies';
import { FcSearch } from 'react-icons/fc';

import Error from 'components/Error/Error';
import MoviesItems from 'components/MoviesItems/MoviesItems';
import Wrapper from 'components/Wrapper/Wrapper';

const Movies = () => {
  const { movies, location, isError, handleSubmit } = useFetchSearchMovies();

  if (isError) return <Error />;

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="flex justify-center">
        <input
          type="text"
          placeholder=" Search movies"
          autoComplete="off"
          name="text"
          className="border border-blue-300 pt-1 pb-1 pr-4 pl-1 rounded mb-5 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-300 p-1 ml-2 text-white hover:text-stone-200 rounded h-8 w-12 flex justify-center items-center mt-0.5"
        >
          <FcSearch />
        </button>
      </form>

      {movies && <MoviesItems movies={movies} location={location} />}
    </Wrapper>
  );
};

export default Movies;
