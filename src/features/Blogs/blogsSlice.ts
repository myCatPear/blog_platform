import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI } from '../../api/blogs';

import { IBlogResponse, IResponse } from 'common/types/api';

const initialState: IResponse<IBlogResponse> = {
  pagesCount: 0,
  page: 0,
  pageSize: 0,
  totalCount: 0,
  items: { id: '', name: '', youtubeUrl: '', createdAt: '' },
};

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
  try {
    const res = await blogsAPI.getAllBlogs();

    return res.data.items;
  } catch (error) {
    console.log('error');
  }
});

export const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchBlogs.fulfilled, (state, action) => {
      if (action.payload) state.items = action.payload;
    });
  },
});

export const blogsReducer = blogsSlice.reducer;
