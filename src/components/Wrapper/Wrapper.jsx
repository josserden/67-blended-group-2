import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Wrapper = ({ children }) => {
  return (
    <Box
      component="section"
      sx={{
        py: '40px',
      }}
    >
      <Container maxWidth="lg">{children}</Container>
    </Box>
  );
};

export default Wrapper;

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
