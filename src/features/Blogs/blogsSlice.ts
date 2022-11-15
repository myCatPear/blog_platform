import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI } from '../../api/blogs';

import { IBlogResponse, IResponse } from 'common/types/api';

const initialState: IResponse<Array<IBlogResponse>> = {
  pagesCount: 0,
  page: 0,
  pageSize: 0,
  totalCount: 0,
  items: [],
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const res = await blogsAPI.getAllBlogs();

    return res.data;
  } catch (error) {
    console.log('error', error);
  }
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      if (action.payload) {
        state.page = action.payload.page;
        state.pagesCount = action.payload.pagesCount;
        state.pageSize = action.payload.pageSize;
        state.totalCount = action.payload.totalCount;
        state.items = action.payload.items;
      }
    });
  },
});

export const blogsReducer = blogsSlice.reducer;
