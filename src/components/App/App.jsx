import { useState } from 'react';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Contact } from 'components/Contact';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Layout } from 'components/Layout';
import { Modal } from 'components/Modal';
import { Paragraph } from 'components/Paragraph';

export const App = () => {
  const [contacts] = useState([]);

  return (
    <Layout>
      <Stack spacing={20}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'end',
          }}
        >
          <Modal />
          <Filter />
        </Box>

        <Contacts>
          {contacts.map(contact => (
            <Contact key={contact.id} {...contact} />
          ))}
        </Contacts>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Paragraph>There are no contacts...</Paragraph>
        </Box>
      </Stack>
    </Layout>
  );
};
