import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

import { blogsReducer, postsReducer, specificBlogReducer } from 'features';

export const store = configureStore({
  reducer: {
    blogsReducer,
    postsReducer,
    specificBlogReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
});

export type RootStateType = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
