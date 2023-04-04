import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

export const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload }) => {
      const { books } = state;
      const uniqueId = Date.now();
      return { ...state, books: [...books, { ...payload, item_id: uniqueId }] };
    },
    removeBook: (state, { payload }) => {
      const { books } = state;
      const temp = books.filter((book) => book.item_id !== payload);
      return { ...state, books: temp };
    },
  },
});

export const { addBook, removeBook } = counterSlice.actions;

export default counterSlice.reducer;
