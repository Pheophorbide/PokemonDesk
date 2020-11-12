import React from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFound from './pages/not-found';

const App = () => {
  return useRoutes(routes) || <NotFound />;
};

export default App;
