import React, { FC } from 'react';

import { NavLink, useParams } from 'react-router-dom';

import style from './SpecificPost.module.scss';
import { SpecificPostDescription } from './SpecificPostDescription';

import { ReactComponent as BackArrowSVG } from 'assets/img/blog/backArrow.svg';
import { ReactComponent as TriangleSVG } from 'assets/img/blog/triangle.svg';
import { ROUTE_TO_POSTS } from 'common/constants';
import commonStyle from 'common/style/CommonStyle.module.scss';

export const SpecificPost: FC = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div className={style.specificPost}>
      <div className={style.specificPost__wrapper}>
        <header className={style.specificPost__header}>
          <h2 className={style.specificPost__title}>Posts</h2>
          <TriangleSVG />
          <h3 className={style.specificPost__blogName}>TEST post name</h3>
        </header>
        <hr className={commonStyle.line} />
        <div className={style.specificPost__backToBlogs}>
          <BackArrowSVG />
          <NavLink to={ROUTE_TO_POSTS} className={style.specificPost__backToBlogsLink}>
            Back to posts
          </NavLink>
        </div>
        <section className={style.mainSection}>
          <SpecificPostDescription />
        </section>
      </div>
    </div>
  );
};
