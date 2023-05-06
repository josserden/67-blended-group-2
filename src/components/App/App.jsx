import { Toaster } from 'react-hot-toast';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Contact } from 'components/Contact';
import { Contacts } from 'components/Contacts';
import { Filter } from 'components/Filter';
import { Layout } from 'components/Layout';
import { Modal } from 'components/Modal';
import { Paragraph } from 'components/Paragraph';
import { useGetContactsQuery } from 'redux/contactsApi';
import { useSelector } from 'react-redux';
import { selectFilter } from 'redux/filterSlice';

export const App = () => {
  const { data: contacts, isError, isLoading } = useGetContactsQuery();
  const filter = useSelector(selectFilter);
  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  if (isLoading) {
    return <Layout>Loading...</Layout>;
  }

  if (isError) {
    return <Layout>Something went wrong...</Layout>;
  }

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

        {filteredContacts.length > 0 ? (
          <Contacts>
            {filteredContacts.map((contact, index) => (
              <Contact key={contact.id} range={index + 1} {...contact} />
            ))}
          </Contacts>
        ) : (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paragraph>There are no contacts...</Paragraph>
          </Box>
        )}
      </Stack>

      <Toaster position="top-center" reverseOrder={false} />
    </Layout>
  );
};
