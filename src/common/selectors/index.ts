import { RootStateType } from 'app/store';
import { IBlogResponse, IPostResponse } from 'common/types/api';

export const getIsInitializedApp = (state: RootStateType): boolean =>
  state.appReducer.isInitializedApp;

export const getAllBlogs = (state: RootStateType): IBlogResponse[] =>
  state.blogsReducer.items;

export const getIsLoadingBlogs = (state: RootStateType): boolean =>
  state.appReducer.isLoadingBlogs;

export const getCurrentSpecificBlog = (state: RootStateType): IBlogResponse =>
  state.specificBlogReducer;

export const getAllPosts = (state: RootStateType): IPostResponse[] =>
  state.postsReducer.items;
