import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import styles from './App.module.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menuVisibilityToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <BrowserRouter basename="PokemonDesk">
      <div className={styles.container}>
        <Header onHandlerClick={menuVisibilityToggle} isOpen={isOpen} />
        <section
          role="button"
          tabIndex={0}
          className={styles.content}
          onClick={menuVisibilityToggle}
          onKeyDown={menuVisibilityToggle}>
          content
        </section>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
