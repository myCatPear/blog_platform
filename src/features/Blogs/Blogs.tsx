import React from 'react';

import style from './Blogs.module.scss';
import { CollapsedBlog } from './CollapsedBlog';

import { useAppSelector } from 'app/hooks';
import commonStyle from 'common/style/CommonStyle.module.scss';

export const Blogs: React.FC = () => {
  const blogs = useAppSelector(state => state.blogsReducer.items);
  // const dispatch = useAppDispatch();
  //
  // console.log(blogs);
  // useEffect(() => {
  //   dispatch(fetchBlogs());
  // }, []);

  return (
    <div className={style.blogs}>
      <div className={style.blogs__wrapper}>
        <h2 className={style.blogs__title}>Blogs</h2>
        <hr className={commonStyle.line} />
        <div className={style.blogs__filter}>
          <input className={style.blogs__search} type="search" placeholder="Search" />
          <select className={style.blogs__sort}>
            <option className={style.blogs__sortOption}>New blogs first</option>
            <option className={style.blogs__sortOption}>2</option>
            <option className={style.blogs__sortOption}>3</option>
          </select>
        </div>
        <div className={style.blogs__blogsList}>
          {blogs.map(blog => (
            <CollapsedBlog {...blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};
