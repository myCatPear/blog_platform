import React, { useEffect } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import style from './SpecificBlog.module.scss';
import { fetchSpecificBlog, setEmptySpecificBlogState } from './SpecificBlogSlice';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import commonStyle from 'common/style/CommonStyle.module.scss';
import { SpecificBlogDescription } from 'features';

export const SpecificBlog: React.FC = () => {
  const { id } = useParams();
  const currentSpecificBlog = useAppSelector(state => state.specificBlogReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id && id !== '1') dispatch(fetchSpecificBlog(id));

    return () => {
      if (id && id !== '1') dispatch(setEmptySpecificBlogState());
    };
  }, []);

  console.log(currentSpecificBlog);

  return (
    <div className={style.specificBlog}>
      <div className={style.specificBlog__wrapper}>
        <header className={style.specificBlog__header}>
          <h2 className={style.specificBlog__title}>Blogs</h2>
          <TriangleSVG />
          <h3 className={style.specificBlog__blogName}>{currentSpecificBlog.name}</h3>
        </header>
        <hr className={commonStyle.line} />
        <div className={style.specificBlog__backToBlogs}>
          <BackArrowSVG />
          <NavLink to={ROUTE_TO_BLOGS} className={style.specificBlog__backToBlogsLink}>
            Back to blogs
          </NavLink>
        </div>
        <section className={style.mainSection}>
          <SpecificBlogDescription />
        </section>
      </div>
    </div>
  );
};
