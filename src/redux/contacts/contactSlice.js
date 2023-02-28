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

export const contactReducer = contactSlice.reducer;

// const contactSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//       items: [],
//       isLoading: false,
//       error: null
//     },

//     extraReducers:  {

//       [fetchContacts.pending](state) {
//         return { ...state, isLoading: true };
//       },
//       [fetchContacts.fulfilled](state, action) {
//         return {
//           ...state,
//           items: [...action.payload],
//           isLoading: false,
//           error: null,
//         };
//       },
//       [fetchContacts.rejected](state, action) {
//         return { ...state, isLoading: false, error: action.payload };
//       },

//       [addContact.pending](state) {
//         return { ...state, isLoading: true };
//       },
//       [addContact.fulfilled](state, action) {
//         return {
//           ...state,
//           items: [...state.items, action.payload],
//           isLoading: false,
//           error: null,
//         };
//       },
//       [addContact.rejected](state, action) {
//         return { ...state, isLoading: false, error: action.payload };
//       },
  
//       [deleteContact.pending](state) {
//         return { ...state, isLoading: true };
//       },
//       [deleteContact.fulfilled](state, action) {
//         return {
//           ...state,
//           items: state.items.filter(contact => contact.id !== action.payload.id),
//           isLoading: false,
//           error: null,
//         };
//       },
//       [deleteContact.rejected](state, action) {
//         return { ...state, isLoading: false, error: action.payload };
//       },
//     },  
// });

// export const contactReducer = contactSlice.reducer;