import React from 'react';

import { NavLink } from 'react-router-dom';

import style from './Navigation.module.scss';

import { ReactComponent as GridIcon } from 'assets/img/navigation/grid_view.svg';
import { ReactComponent as ListIcon } from 'assets/img/navigation/list.svg';

export const Navigation: React.FC = () => {
  return (
    <nav className={style.nav}>
      <ul className={style.menu}>
        <li className={style.menu__item}>
          <ListIcon className={style.svg} />
          <NavLink className={style.menu__link} to="/blogs">
            Blogs
          </NavLink>
        </li>
        <li className={style.menu__item}>
          <GridIcon className={style.svg} />
          <NavLink className={style.menu__link} to="/posts">
            Posts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
