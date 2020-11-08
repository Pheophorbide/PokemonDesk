import React, { Fragment } from 'react';
import { withRouter } from 'react-router';
import Button from '../../components/button';
import Parallax from '../../components/parallax';
import Heading, { HeaderType } from '../../components/heading';

import styles from './Home.module.scss';

const HomePage = ({ history }) => {
  function onClick() {
    history.push('/pokedex');
  }

  return (
    <Fragment>
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
    </Fragment>
  );
};

export default withRouter(HomePage);
