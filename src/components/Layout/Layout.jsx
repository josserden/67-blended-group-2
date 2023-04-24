import { Box } from '@mui/material';
import PropTypes from 'prop-types';

import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { PageWrapper } from 'components/PageWrapper';

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <PageWrapper>{children}</PageWrapper>
      </Box>

      <Footer />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
