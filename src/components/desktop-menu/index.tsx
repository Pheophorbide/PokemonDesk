import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Desktop.module.scss';

type MenuItemType = {
  title: string;
  path: string;
};

interface DesktopMenuType {
  menu: MenuItemType[];
}

const DesktopMenu: React.FC<DesktopMenuType> = ({ menu }) => (
  <div className={styles.menu}>
    {menu &&
      menu.map(({ title, path }) => (
        <NavLink key={title} className={styles.item} to={path} activeClassName={styles.active}>
          {title}
        </NavLink>
      ))}
  </div>
);

export default DesktopMenu;
