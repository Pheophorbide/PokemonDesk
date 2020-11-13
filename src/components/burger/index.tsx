import React, { memo } from 'react';
import { ReactComponent as BurgerIcon } from '../../svg/burger.svg';

import styles from './Burger.module.scss';

type BurgerType = {
  onClick: () => void;
};

const Burger = ({ onClick }: BurgerType) => (
  <button onClick={onClick} className={styles.burger} type="button">
    <BurgerIcon />
  </button>
);

export default memo(Burger);
