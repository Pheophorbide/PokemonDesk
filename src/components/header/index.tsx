import React, { useState } from 'react';
import Logo from '../logo';
import Burger from '../burger';
import MobileMenu from '../mobile-menu';
import DesktopMenu from '../desktop-menu';
import { GENERAL_MENU } from '../../routes';

import styles from './Header.module.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function menuVisibilityToggle() {
    if (window.innerWidth > 768) return;
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Logo />
          <DesktopMenu menu={GENERAL_MENU} />
          <Burger onClick={menuVisibilityToggle} />
        </div>
      </div>
      <MobileMenu isOpen={isOpen} menu={GENERAL_MENU} onClick={menuVisibilityToggle} />
    </div>
  );
};

export default Header;
