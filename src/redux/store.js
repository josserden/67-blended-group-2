import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

import contactsReducer from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer.reducer,
  },

  middleware: getDefaultMiddleware => [...getDefaultMiddleware()],
});

setupListeners(store.dispatch);
