import React from 'react';
import BurgerIcon from '../../svg/burger.svg';

import styles from './Burger.module.scss';

type BurgerType = {
  onClick: () => void;
};

const Burger = ({ onClick }: BurgerType) => (
  <button onClick={onClick} className={styles.burger} type="button">
    <BurgerIcon />
  </button>
);

export default Burger;
