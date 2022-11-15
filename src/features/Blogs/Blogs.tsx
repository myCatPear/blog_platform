import React, { useEffect } from 'react';

import style from './Blogs.module.scss';
import { fetchBlogs } from './blogsSlice';

import { useAppDispatch, useAppSelector } from 'app/hooks';

export const Blogs: React.FC = () => {
  const blogs = useAppSelector(state => state.blogsReducer.items);
  const dispatch = useAppDispatch();

  console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return <div className={style.blogs}>Blogs</div>;
};
