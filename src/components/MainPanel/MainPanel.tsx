import React from 'react';

import style from './MainPanel.module.scss';

import commonStyle from 'common/style/CommonStyle.module.scss';

interface IMainPanel {
  children: React.ReactNode;
}

export const MainPanel: React.FC<IMainPanel> = ({ children }) => {
  return (
    <div className={commonStyle.container}>
      <div className={style.mainPanel}>{children}</div>
    </div>
  );
};
