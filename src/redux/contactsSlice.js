import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    testReducer: state => {
      state.contacts = [...state.contacts, { name: 'test' }];
    },
  },
});

export const { testReducer } = contactsSlice.actions;
export default contactsSlice;
