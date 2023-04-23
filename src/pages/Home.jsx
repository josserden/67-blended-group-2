import Typography from '@mui/material/Typography';
import { useFetchTrendingMovies } from 'hooks/useFetchTrendingMovies';

import MoviesItems from 'components/MoviesItems/MoviesItems';
import Wrapper from 'components/Wrapper/Wrapper';
import Error from 'components/Error/Error';

const Home = () => {
  const { movies, location, isError } = useFetchTrendingMovies();

  if (isError) return <Error />;

  return (
    <Wrapper>
      <Typography component="h1" variant="h4" gutterBottom align="center">
        Trending Movies
      </Typography>

      <MoviesItems movies={movies} location={location} />
    </Wrapper>
  );
};

export default Home;
