import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import secrets from '../../Utility/secrets';

const initialState = {
  books: [],
  loading: false,
  loadingName: '',
};

export const getAllBooks = createAsyncThunk('Get All Books', async () => {
  const response = await axios.get(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${secrets.API_KEY}/books/`);
  console.log(response.data);
  return response.data;
});

export const addBook = createAsyncThunk('Add a book', async (payload) => {
  const uniqueId = Date.now();
  await axios.post(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${secrets.API_KEY}/books`,
    {
      ...payload,
      item_id: uniqueId,
    });
  return {
    ...payload,
    item_id: uniqueId,
  };
});

export const removeBook = createAsyncThunk('Remove a book', async (itemId) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${secrets.API_KEY}/books/${itemId}`);
  return itemId;
});

export const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder.addCase(addBook.pending, (state) => ({ ...state, loading: true, loadingName: 'Adding' }));
    builder.addCase(addBook.fulfilled, (state, { payload }) => {
      const newBook = [{
        author: payload.author,
        title: payload.title,
        category: payload.category,
      }];
      return { ...state, loading: false, books: { ...state.books, [payload.item_id]: newBook } };
    });
    builder.addCase(getAllBooks.pending, (state) => ({ ...state, loading: true, loadingName: 'Getting' }));
    builder.addCase(getAllBooks.fulfilled, (state, action) => (
      { ...state, loading: false, books: action.payload }
    ));
    builder.addCase(removeBook.pending, (state) => ({ ...state, loading: true, loadingName: 'Removing' }));
    builder.addCase(removeBook.fulfilled, (state, { payload }) => {
      const { [payload]: removedBook, ...remainingBooks } = state.books;
      return {
        ...state,
        loading: false,
        books: remainingBooks,
      };
    });
  },
});

export default counterSlice.reducer;
