import { Link, useLocation } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '12px',
  overflow: 'hidden',
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  transition: 'transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',

  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

const BASE_URL = 'http://image.tmdb.org/t/p/w500/';
const defaultImg =
  'https://yt3.googleusercontent.com/pL_VB56ZIus1L_ORk679enHohInq0pjCweZ4vgqS5yM4KB0mAp8DEznP94MdSIQpSM3-5uE_lQ=s900-c-k-c0x00ffffff-no-rj';

const MoviesItems = ({ movies, location }) => {
  const locationItem = useLocation();
  const to = location.pathname;

  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {movies.map(({ id, poster_path, title }) => (
        <Grid xs={2} sm={4} md={4} key={id}>
          <Item>
            <Link
              key={id}
              to={to !== ROUTES.HOME ? `${id}` : `${ROUTES.MOVIES}/${id}`}
              state={{ from: locationItem }}
            >
              <img
                src={poster_path ? BASE_URL + poster_path : defaultImg}
                alt={title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <Box
                sx={{
                  p: '10px',
                }}
              >
                <Typography
                  variant="subtitle1"
                  component="p"
                  gutterBottom
                  noWrap
                  sx={{
                    color: 'gray',
                    fontSize: '1rem',
                    fontWeight: 700,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Link>
          </Item>
        </Grid>
      ))}
    </Grid>
  );
};
export default MoviesItems;
