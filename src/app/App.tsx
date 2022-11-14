import React from 'react';

import commonStyle from 'common/style/CommonStyle.module.scss';
import { Header, MainPanel } from 'components';

export const App: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <Header />
      <MainPanel />
    </div>
  );
};
