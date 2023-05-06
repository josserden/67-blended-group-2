import React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export const PageWrapper = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="xl">{children}</Container>
    </Box>
  );
};

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
