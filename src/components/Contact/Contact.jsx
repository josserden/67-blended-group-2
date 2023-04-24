import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const Contact = ({ id, name, number }) => {
  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
    >
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{number}</TableCell>
      <TableCell>
        <Button variant="outlined">Delete</Button>
      </TableCell>
    </TableRow>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
