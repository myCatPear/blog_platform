import React, { useEffect } from 'react';

import { CollapsedPost } from './CollapsedPost';
import style from './Posts.module.scss';
import { fetchAllPosts } from './postsSlice';

import { useAppDispatch, useAppSelector } from 'app/hooks';
import { getAllPosts } from 'common/selectors';
import commonStyle from 'common/style/CommonStyle.module.scss';

export const Posts: React.FC = () => {
  const posts = useAppSelector(getAllPosts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllPosts());
  }, []);

  return (
    <div className={style.posts}>
      <div className={style.posts__wrapper}>
        <h2 className={style.posts__title}>Posts</h2>
        <hr className={commonStyle.line} />
        <div className={style.posts__filter}>
          <select className={style.posts__sort}>
            <option className={style.posts__sortOption}>New blogs first</option>
            <option className={style.posts__sortOption}>2</option>
            <option className={style.posts__sortOption}>3</option>
          </select>
        </div>
        <div className={style.posts__postsList}>
          {posts.map(post => (
            <CollapsedPost
              key={post.id}
              id={post.id}
              title={post.title}
              shortDescription={post.shortDescription}
              date={post.createdAt}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
