import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../../app/hooks';

import style from './SpecificBlog.module.scss';
import { fetchSpecificBlog, setEmptySpecificBlogState } from './SpecificBlogSlice';

import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import commonStyle from 'common/style/CommonStyle.module.scss';

export const SpecificBlog: React.FC = () => {
  const { id } = useParams();
  const currentBlog = useAppSelector(state => state.specificBlogReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) dispatch(fetchSpecificBlog(id));

    return () => {
      dispatch(setEmptySpecificBlogState());
    };
  }, []);

  console.log(currentBlog);

  return (
    <div className={style.specificBlog}>
      <div className={style.specificBlog__wrapper}>
        <header className={style.specificBlog__header}>
          <h2 className={style.specificBlog__title}>Blogs</h2>
          <TriangleSVG />
          <h3 className={style.specificBlog__blogName}>{currentBlog.name}</h3>
        </header>
        <hr className={commonStyle.line} />
        123
      </div>
    </div>
  );
};
