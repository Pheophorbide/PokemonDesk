import React from 'react';
import { navigate } from 'hookrouter';
import Button, { ColorTypes } from '../../components/button';

import styles from './NotFound.module.scss';

const NotFound = () => {
  function onClick() {
    navigate('/');
  }

  return (
    <section className={styles.root}>
      <img className={styles.img} src="/src/pages/not-found/assets/Team_Rocket.png" alt="Team_Rocket" />
      <h1 className={styles.title}>The rocket team has won this time.</h1>
      <Button color={ColorTypes.yellow} onClick={onClick}>
        Return
      </Button>
    </section>
  );
};

export default NotFound;
