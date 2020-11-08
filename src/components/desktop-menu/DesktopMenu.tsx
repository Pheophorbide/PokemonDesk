import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Desktop.module.scss';

type MenuItemType = {
  title: string;
  path: string;
};

type DesktopMenuType = {
  menu: MenuItemType[];
};

const DesktopMenu = ({ menu }: DesktopMenuType) => (
  <div className={styles.menu}>
    {menu &&
      menu.map(({ title, path }) => (
        <NavLink className={styles.item} to={path}>
          {title}
        </NavLink>
      ))}
  </div>
);

export default DesktopMenu;
