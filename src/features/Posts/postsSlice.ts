import { createSlice } from '@reduxjs/toolkit';

import { IPostResponse } from 'common/types/api';

const initialState: IPostResponse[] = [
  {
    id: '1',
    createdAt: '2022-11-23T20:55:51.495Z',
    blogId: '1',
    blogName: 'test blog name 1',
    content: 'test content 1',
    shortDescription: 'test short description 1',
    title: 'test title 1',
  },
  {
    id: '2',
    createdAt: '2022-11-23T20:55:51.495Z',
    blogId: '2',
    blogName: 'test blog name 2',
    content: 'test content 2',
    shortDescription: 'test short description 2',
    title: 'test title 2',
  },
  {
    id: '3',
    createdAt: '2022-11-23T20:55:51.495Z',
    blogId: '3',
    blogName: 'test blog name 3',
    content: 'test content 3',
    shortDescription: 'test short description 3',
    title: 'test title 3',
  },
  {
    id: '4',
    createdAt: '2022-11-23T20:55:51.495Z',
    blogId: '4',
    blogName: 'test blog name 4',
    content: 'test content 4',
    shortDescription: 'test short description 4',
    title: 'test title 4',
  },
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
});

export const postsReducer = postsSlice.reducer;
