import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import styles from './Mobile-Menu.module.scss';
import Logo from '../logo/Logo';

type MenuItemType = {
  title: string;
  path: string;
};

type MobileMenuType = {
  menu: MenuItemType[];
  isOpen: boolean;
};

const MobileMenu = ({ menu, isOpen }: MobileMenuType) => (
  <div className={classnames(styles.menu, { [styles.open]: isOpen })}>
    <Logo className={styles.logo} />
    {menu &&
      menu.map(({ title, path }) => (
        <NavLink className={styles.item} key={path} to={path}>
          {title}
        </NavLink>
      ))}
  </div>
);

export default MobileMenu;
