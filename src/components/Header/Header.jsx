import { TiContacts } from 'react-icons/ti';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export const Header = () => {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            py: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <TiContacts
              style={{
                color: '#fff',
                fontSize: '2.5rem',
              }}
            />
            <Typography
              component="h1"
              noWrap
              sx={{
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#fff',
              }}
            >
              Contacts App
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
