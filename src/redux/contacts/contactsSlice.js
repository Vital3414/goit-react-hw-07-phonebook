import { createSlice } from '@reduxjs/toolkit';
import {
  getContactAction,
  postContactAction,
  deleteContactAction,
} from './operations';
import {
  handlePending,
  handleFulfilled,
  handleRejected,
  addContact,
  deleteContact,
} from './functions';

const initialState = {
  contacts: [],
  isLoading: false,
  error: null,
  filter: '',
};

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getContactAction.pending, handlePending)
      .addCase(getContactAction.fulfilled, handleFulfilled)
      .addCase(getContactAction.rejected, handleRejected)
      .addCase(postContactAction.fulfilled, addContact)
      .addCase(deleteContactAction.fulfilled, deleteContact);
  },
});

export const phonebookReducer = phonebookSlice.reducer;

export const { setFilter } = phonebookSlice.actions;
