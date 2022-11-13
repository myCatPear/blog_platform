import React from 'react';

import { Header, MainPanel, Navigation } from 'components';
import { Blogs } from 'features';

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainPanel>
        <Navigation />
        <Blogs />
      </MainPanel>
    </>
  );
};
