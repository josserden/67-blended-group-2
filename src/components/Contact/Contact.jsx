import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const Contact = ({ id, range, name, number }) => {
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      id={id}
    >
      <TableCell align="left">{range}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="right">{number}</TableCell>
      <TableCell align="right">
        <Button variant="outlined">Delete</Button>
      </TableCell>
    </TableRow>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  range: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
