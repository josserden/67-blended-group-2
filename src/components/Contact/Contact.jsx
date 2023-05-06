import PropTypes from 'prop-types';
import toast from 'react-hot-toast';

import Button from '@mui/material/Button';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const Contact = ({ id, range, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();

  const handleDelete = async () => {
    try {
      await deleteContact(id);
      toast.success('Contact deleted successfully');
    } catch {
      console.error('error');
      toast.error('Something went wrong');
    }
  };

  return (
    <TableRow
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
      }}
      id={id}
    >
      <TableCell align="left">{range}</TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center">{phone}</TableCell>
      <TableCell align="right">
        <Button variant="outlined" onClick={handleDelete}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  range: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
