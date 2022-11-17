import React from 'react';

import { Route, Routes } from 'react-router-dom';

import { publicRoutes } from '../common/routes';

import commonStyle from 'common/style/CommonStyle.module.scss';
import { Header, MainPanel, MainSection, Navigation } from 'components';

export const App: React.FC = () => {
  return (
    <div className={commonStyle.container}>
      <Header />
      <MainPanel>
        <Navigation />
        <MainSection>
          <Routes>
            {publicRoutes.map(route => (
              <Route key={route.path} path={route.path} element={<route.Component />} />
            ))}
          </Routes>
        </MainSection>
      </MainPanel>
    </div>
  );
};
