import React from 'react';

import style from './Header.module.scss';

import commonStyle from 'common/style/CommonStyle.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <div className={commonStyle.container}>
        <h1 className={style.title}>Blogger Platform</h1>
      </div>
    </header>
  );
};
