import React, { FC } from 'react';

import style from './SpecificPostDescription.module.scss';

import {
  ReactComponent as BlogAvatarSVG,
  ReactComponent as PostAvatarSVG,
} from 'assets/img/post/photo_size_select_actual.svg';

export const SpecificPostDescription: FC = () => {
  return (
    <div className={style.specificPostDescription}>
      <div className={style.specificPostDescription__blogInfo}>
        <div className={style.specificPostDescription__blogImg}>
          <BlogAvatarSVG className={style.specificPostDescription__blogAvatar} />
        </div>
        <div className={style.specificPostDescription__blogName}> Test Blog name</div>
      </div>
      <div className={style.specificPostDescription__postInfo}>
        <h3 className={style.specificPostDescription__postTitle}>Test post title</h3>
        <h6 className={style.specificPostDescription__createdDate}> Test date</h6>
      </div>
      <div className={style.specificPostDescription__postImg}>
        <PostAvatarSVG className={style.specificPostDescription__postAvatar} />
      </div>
      <p className={style.specificPostDescription__text}>
        Lorem ipsum dolor sit amet consectetur adipiscing elit, magna felis vestibulum
        metus aptent velit, tempor posuere natoque habitasse phasellus dignissim. Nec
        libero purus etiam venenatis velit cras nascetur euismod ornare sodales, ex ut
        augue sed vestibulum molestie dis quisque laoreet, tempor ullamcorper mus odio
        nostra est dolor magna justo. Lorem ipsum dolor sit amet consectetur adipiscing
        elit, magna felis vestibulum metus aptent velit, tempor posuere natoque habitasse
        phasellus dignissim. Nec libero purus etiam venenatis velit cras nascetur euismod
        ornare sodales, ex ut augue sed vestibulum molestie dis quisque laoreet, tempor
        ullamcorper mus odio nostra est dolor magna justo.
      </p>
    </div>
  );
};
