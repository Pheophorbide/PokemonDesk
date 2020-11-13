import React, { Fragment } from 'react';
import { useRoutes } from 'hookrouter';
import routes from './routes';
import NotFound from './pages/not-found';
import Header from './components/header';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <Fragment>
      <Header />
      {match}
    </Fragment>
  ) : (
    <NotFound />
  );
};

export default App;
