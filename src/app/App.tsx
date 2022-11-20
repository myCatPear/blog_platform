import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import { ROUTE_TO_BLOGS, ROUTE_TO_HOME } from 'common/constants';
import { publicRoutes } from 'common/routes';
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
            <Route path={ROUTE_TO_HOME} element={<Navigate to={ROUTE_TO_BLOGS} />} />
          </Routes>
        </MainSection>
      </MainPanel>
    </div>
  );
};
