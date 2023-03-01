import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operation';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
      items: [],
      isLoading: false,
      error: null
    },

    extraReducers: builder => {
      builder
      .addCase(fetchContacts.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })

      .addCase(addContact.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(addContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: [...state.items, action.payload],
          isLoading: false,
          error: null,
        };
      })
      .addCase(addContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
  
      .addCase(deleteContact.pending, (state) => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(contact => contact.id !== action.payload.id),
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
    },  
});

<<<<<<< HEAD
export const contactReducer = contactSlice.reducer;
=======
export const contactReducer = contactSlice.reducer;
>>>>>>> 96b776b876440f17829a40e602a6442edfd1fed0
