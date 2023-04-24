import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';

export const Paragraph = ({ children }) => {
  return (
    <Typography
      variant="subtitle1"
      component="p"
      gutterBottom
      sx={{
        color: 'gray',
        fontSize: '1.2rem',
      }}
    >
      {children}
    </Typography>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
};
