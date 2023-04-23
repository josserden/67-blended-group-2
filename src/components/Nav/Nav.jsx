import { NavLink } from 'react-router-dom';
import { ROUTES } from 'utils/routes';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const pages = [
  {
    name: 'home',
    path: ROUTES.HOME,
  },
  {
    name: 'movies',
    path: ROUTES.MOVIES,
  },
];

const Nav = () => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 2,
          }}
        >
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to={ROUTES.HOME}
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Movie Maker
          </Typography>

          <Box
            component="nav"
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {pages.map(({ name, path }) => (
              <Button
                component={NavLink}
                key={name}
                to={path}
                variant="link"
                color="inherit"
                sx={{
                  fontSize: '18px',

                  '&.active': {
                    color: 'pink',
                    textDecoration: 'underline',
                  },
                }}
              >
                {name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
