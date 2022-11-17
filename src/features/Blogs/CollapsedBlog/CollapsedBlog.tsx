import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './CollapsedBlog.module.scss';

import { ReactComponent as BLOG_SVG } from 'assets/img/blog/blog.svg';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { IBlogResponse } from 'common/types/api';

export const CollapsedBlog: React.FC<IBlogResponse> = props => {
  const { name, id } = props;

  return (
    <div className={style.blogCollapsed}>
      <div className={style.blogIMG}>
        <BLOG_SVG />
      </div>
      <div className={style.blogCollapsed__main}>
        <NavLink to={`${ROUTE_TO_BLOGS}/${id}`} className={style.blogCollapsed__title}>
          {name}
        </NavLink>
        <p className={style.blogCollapsed__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
    </div>
  );
};
