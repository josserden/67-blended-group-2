import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.target;

    setValue(value);
    dispatch(setFilter(value));
  };

  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': {
          width: '25ch',
        },
      }}
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="Find user by name"
        variant="standard"
        type="text"
        value={value}
        onChange={handleChangeFilter}
      />
    </Box>
  );
};
