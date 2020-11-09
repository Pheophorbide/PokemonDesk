import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import Logo from '../logo';

import styles from './Mobile-Menu.module.scss';

type MenuItemType = {
  title: string;
  path: string;
};

interface MobileMenuType {
  menu: MenuItemType[];
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuType> = ({ menu, isOpen, onClick }) => (
  <div className={classnames(styles.menu, { [styles.open]: isOpen })}>
    <Logo className={styles.logo} onClick={onClick} />
    {menu &&
      menu.map(({ title, path }) => (
        <NavLink className={styles.item} key={path} to={path}>
          {title}
        </NavLink>
      ))}
  </div>
);

export default MobileMenu;
