import { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import { Form } from 'components/Form';

export const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async data => {
    console.log(data);
  };

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}>
        Add new contact
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <Box
          sx={{
            px: 12,
            py: 8,
          }}
        >
          <DialogTitle>New contact</DialogTitle>

          <DialogContent>
            <DialogContentText
              sx={{
                mb: 2,
              }}
            >
              To add new contact, please enter name and phone number.
            </DialogContentText>

            <Form onSubmit={onSubmit} handleClose={handleClose} />
          </DialogContent>
        </Box>
      </Dialog>
    </>
  );
};
