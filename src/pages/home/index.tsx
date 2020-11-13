import React from 'react';
import { navigate } from 'hookrouter';
import Layout from '../../components/layout';
import Button from '../../components/button';
import Parallax from '../../components/parallax';
import Heading, { HeaderType } from '../../components/heading';
import { LinkEnum } from '../../routes';

import styles from './Home.module.scss';

const HomePage = () => {
  function onClick() {
    navigate(LinkEnum.POKEDEX);
  }

  return (
    <Layout className={styles.root} color="yellow">
      <div className={styles.content}>
        <Heading type={HeaderType.h1}>
          <b>Find</b> all your favorite <b>Pokemon</b>
        </Heading>
        <p className={styles.description}>
          You can know the type of Pokemon, its strengths, disadvantages and abilities{' '}
        </p>
        <Button onClick={onClick}>See pokemons</Button>
      </div>
      <Parallax />
    </Layout>
  );
};

export default HomePage;
