import React from 'react';

import style from './MainPanel.module.scss';

import commonStyle from 'common/style/CommonStyle.module.scss';
import { Navigation } from 'components';
import { Blogs } from 'features';

export const MainPanel: React.FC = () => {
  return (
    <div className={`${style.mainPanel} ${commonStyle.container}`}>
      <Navigation />
      <Blogs />
    </div>
  );
};
