import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const postsReducer = postsSlice.reducer;
