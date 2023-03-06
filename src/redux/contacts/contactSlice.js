import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  editContact,
} from './operation';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    editContact: null,
  },

  reducers: {
    getEditingContact: (state, action) => {
      console.log(action.payload);
      return { ...state, editContact: action.payload };
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
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

      .addCase(addContact.pending, state => {
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

      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          ...state,
          items: state.items.filter(
            contact => contact.id !== action.payload.id
          ),
          isLoading: false,
          error: null,
        };
      })
      .addCase(deleteContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
      .addCase(editContact.pending, state => {
        return {...state, isLoading: true };
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.items.map(item => item !== action.payload)
        // const index = state.items.findIndex(
        //   contact => contact.id === action.payload.id
        // );
        // state.items.splice(index, 1, action.payload);
        //isLoading: false,
        //error: null,
       // };
      })
      .addCase(editContact.rejected, (state, action) => {
        return { ...state, isLoading: false, error: action.payload };
      })
  }
});

export const { getEditingContact } = contactSlice.actions;

export const contactReducer = contactSlice.reducer;
