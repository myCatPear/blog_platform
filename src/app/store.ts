import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { appReducer } from './appSlice';

import { blogsReducer, postsReducer, specificBlogReducer } from 'features';

export const store = configureStore({
  reducer: {
    blogsReducer,
    postsReducer,
    specificBlogReducer,
    appReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
