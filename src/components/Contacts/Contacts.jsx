import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const tableRows = [
  {
    name: '№',
    align: 'left',
  },
  {
    name: 'name',
    align: 'center',
  },
  {
    name: 'number',
    align: 'right',
  },
  {
    name: 'options',
    align: 'right',
  },
];

export const Contacts = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TableContainer
        component={Paper}
        sx={{ display: 'block', maxWidth: 750, mx: 'auto' }}
      >
        <Table sx={{ width: '100%' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {tableRows.map(({ name, align }) => (
                <TableCell
                  key={name}
                  sx={{
                    fontWeight: 700,
                  }}
                  align={align}
                >
                  {name.toUpperCase()}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>{children}</TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

Contacts.propTypes = {
  children: PropTypes.node.isRequired,
};
