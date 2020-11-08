import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Home from './pages/home';
import Header from './components/header';
import Footer from './components/footer';
import Pokedex from './pages/pokedex';

import styles from './App.module.scss';

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.root}>
        <Header />
        <section className={styles.container}>
          <Redirect to="home" />
          <Route exact component={Home} path="/home">
            <Home />
          </Route>
          <Route exact path="/pokedex">
            <Pokedex />
          </Route>
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
