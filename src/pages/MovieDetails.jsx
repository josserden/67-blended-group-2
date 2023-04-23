import { Link, Outlet } from 'react-router-dom';
import { RxArrowLeft } from 'react-icons/rx';
import { useFetchDetailsMovie } from 'hooks/useFetchDetailsMovie';
import { ROUTES } from 'utils/routes';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Error from 'components/Error/Error';
import Wrapper from 'components/Wrapper/Wrapper';

const subPages = [
  {
    name: 'cast',
    path: ROUTES.CAST,
  },
  {
    name: 'reviews',
    path: ROUTES.REVIEWS,
  },
];

const BASE_URL = 'http://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movie, location, isError } = useFetchDetailsMovie();
  const backLocation = location.state?.from ?? ROUTES.HOME;

  const { poster_path, title, genres, overview, release_date, vote_average } =
    movie;

  if (isError) return <Error />;

  return (
    <Wrapper>
      <Button
        component={Link}
        to={backLocation}
        variant="contained"
        color="primary"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '5px',
        }}
      >
        <RxArrowLeft />
        Go Back
      </Button>

      {poster_path && (
        <>
          <div className="ml-3 mt-3 flex">
            <div>
              <img src={BASE_URL + poster_path} alt={title} />
            </div>

            <div className="flex flex-col gap-8 ml-5 last:max-w-[60%]">
              <h2 className="font-bold text-2xl">{title}</h2>
              <p className="text-xl">Release Date: {release_date}</p>
              <p className="text-xl"> IMDb: {vote_average.toFixed(2)}</p>
              <p className="text-xl">
                Genres: {genres.map(genre => genre.name).join(', ')}
              </p>
              <p className="text-xl">Overview: {overview}</p>
            </div>
          </div>

          <div className="border-b border-t border-black mt-2 mb-10">
            <p className="ml-5 mt-1 mb-1 font-bold text-xl">
              Additional information
            </p>

            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              {subPages.map(({ name, path }) => (
                <Button key={name} component={Link} to={path}>
                  {name}
                </Button>
              ))}
            </ButtonGroup>
          </div>
        </>
      )}

      <Outlet />
    </Wrapper>
  );
};

export default MovieDetails;
