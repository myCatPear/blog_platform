import React from 'react';

import { useLocation } from 'react-router-dom';

import style from './MainSection.module.scss';

import { ROUTE_TO_BLOGS, ROUTE_TO_POSTS } from 'common/constants';
import { Blogs, Posts } from 'features';

export const MainSection: React.FC = () => {
  const location = useLocation();

  return (
    <div className={style.mainSection}>
      {location.pathname === ROUTE_TO_BLOGS && <Blogs />}
      {location.pathname === ROUTE_TO_POSTS && <Posts />}
    </div>
  );
};
