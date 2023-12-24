import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, thunkApi) => {
    try {
      const { data } = await axios.get(
        'https://mockapi.io/clone/6587fb5590fa4d3dabf94fc3/contacts'
      );
      return data;
    } catch (error) {
      console.error('Error in operations:', error.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const postContact = createAsyncThunk(
  'contacts/postContact',
  async (contact, thunkApi) => {
    try {
      const { data } = await axios.post(
        'https://mockapi.io/clone/6587fb5590fa4d3dabf94fc3/contacts',
        contact
      );
      return data;
    } catch (error) {
      console.error('Error in operations:', error.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      await axios.delete(
        `https://mockapi.io/clone/6587fb5590fa4d3dabf94fc3/contacts/${id}`
      );
      return id;
    } catch (error) {
      console.error('Error in operations:', error.message);
      return thunkApi.rejectWithValue(error);
    }
  }
);
