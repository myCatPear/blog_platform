import React from 'react';

import style from './MainPanel.module.scss';

import { MainSection, Navigation } from 'components';

export const MainPanel: React.FC = () => {
  return (
    <div className={`${style.mainPanel}`}>
      <Navigation />
      <MainSection />
    </div>
  );
};
