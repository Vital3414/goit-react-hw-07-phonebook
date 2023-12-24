import { createAsyncThunk } from '@reduxjs/toolkit';
import { getContacts, postContact, deleteContact } from 'contacts-api';

export const getContactAction = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await getContacts();
      return data;
    } catch (error) {
      console.log('error in operations', error.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postContactAction = createAsyncThunk(
  'contacts/postContact',
  async contact => await postContact(contact)
);

export const deleteContactAction = createAsyncThunk(
  'contacts/deleteContact',
  async id => await deleteContact(id)
);
