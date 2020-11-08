import React, { Fragment } from 'react';
import styles from './Header.module.scss';
import Logo from '../logo/Logo';
import Burger from '../burger/Burger';
import MobileMenu from '../mobile-menu/Mobile-menu';
import DesktopMenu from '../desktop-menu/DesktopMenu';

const MENU = [
  {
    title: 'Home',
    path: '/home',
  },
  {
    title: 'Pokedex',
    path: '/pokedex',
  },
  {
    title: 'Legendarios',
    path: '/legendarios ',
  },
  {
    title: 'Documentacion',
    path: '/documentacion ',
  },
];

type HeaderType = {
  onHandlerClick: () => void;
  isOpen: boolean;
};

const Header = ({ onHandlerClick, isOpen }: HeaderType) => (
  <>
    <div className={styles.container}>
      <Logo />
      <DesktopMenu menu={MENU} />
      <Burger onClick={onHandlerClick} />
    </div>
    <MobileMenu isOpen={isOpen} menu={MENU} />
  </>
);

export default Header;
