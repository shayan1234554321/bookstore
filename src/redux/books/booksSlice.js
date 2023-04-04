import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};

export const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const temp = state.books;
      temp.push(payload);
      return { ...state, books: temp };
    },
    removeBook: (state, { index }) => {
      const temp = state.books.filter((_, i) => i !== index);
      return { ...state, books: temp };
    },
  },
});

export const { addBook, removeBook } = counterSlice.actions;

export default counterSlice.reducer;
