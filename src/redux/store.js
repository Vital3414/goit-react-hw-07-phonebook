import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from '../redux/contacts/contactsSlice';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
  },
});
