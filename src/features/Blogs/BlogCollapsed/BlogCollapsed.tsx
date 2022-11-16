import React from 'react';

import style from './BlogCollapsed.module.scss';

import { ReactComponent as BLOG_SVG } from 'assets/img/blog/blog.svg';

export const BlogCollapsed: React.FC = () => {
  return (
    <div className={style.blogCollapsed}>
      <div className={style.blogIMG}>
        <BLOG_SVG />
      </div>
      <div className={style.blogCollapsed__main}>
        <h3 className={style.blogCollapsed__title}>The best blog in our village</h3>
        <p className={style.blogCollapsed__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        </p>
      </div>
    </div>
  );
};
