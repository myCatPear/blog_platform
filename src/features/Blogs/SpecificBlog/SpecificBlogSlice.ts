import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { blogsAPI } from '../../../api/blogs';

import { EMPTY_STRING } from 'common/constants';
import { IBlogResponse } from 'common/types/api';

export const fetchSpecificBlog = createAsyncThunk(
  'fetchSpecificBlog',
  async (id: string, thunkAPI) => {
    try {
      const res = await blogsAPI.getSpecificBlog(id);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(null);
    }
  },
);

const initialState: IBlogResponse = {
  id: EMPTY_STRING,
  name: EMPTY_STRING,
  youtubeUrl: EMPTY_STRING,
  createdAt: EMPTY_STRING,
};

const specificBlogSlice = createSlice({
  name: 'SpecificBlog',
  initialState,
  reducers: {
    setEmptySpecificBlogState() {
      return {
        id: EMPTY_STRING,
        name: EMPTY_STRING,
        youtubeUrl: EMPTY_STRING,
        createdAt: EMPTY_STRING,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchSpecificBlog.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const specificBlogReducer = specificBlogSlice.reducer;
export const { setEmptySpecificBlogState } = specificBlogSlice.actions;
