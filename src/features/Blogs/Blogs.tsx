import React, { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../app/hooks';

import style from './Blogs.module.scss';
import { fetchBlogs } from './blogsSlice';

export const Blogs: React.FC = () => {
  const blogs = useAppSelector(state => state.blogsReducer.items);
  const dispatch = useAppDispatch();

  console.log(blogs);
  useEffect(() => {
    dispatch(fetchBlogs());
  }, []);

  return (
    <div className={style.blogs}>
      <h2>{blogs.name}</h2>
    </div>
  );
};
