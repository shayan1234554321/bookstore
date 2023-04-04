import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under Construction',
};

export const counterSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => {
      if (state.categories.length === 0) {
        return {
          ...state,
          status: 'Under Construction',
        };
      }
      return {
        ...state,
        status: 'Available Now',
      };
    },
  },
});

export const { checkStatus } = counterSlice.actions;

export default counterSlice.reducer;
