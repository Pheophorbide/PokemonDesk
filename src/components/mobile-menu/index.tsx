import React, { MouseEventHandler } from 'react';
import { A, usePath } from 'hookrouter';
import classnames from 'classnames';
import { MenuItemType } from '../../routes';
import Logo from '../logo';

import styles from './Mobile-Menu.module.scss';

interface MobileMenuType {
  menu: MenuItemType[];
  isOpen: boolean;
  onClick: MouseEventHandler<HTMLDivElement>;
}

const MobileMenu: React.FC<MobileMenuType> = ({ menu, isOpen, onClick }) => {
  const path = usePath();

  return (
    <div className={classnames(styles.menu, { [styles.open]: isOpen })}>
      <Logo className={styles.logo} onClick={onClick} />
      {menu &&
        menu.map(({ title, link }) => (
          <A className={classnames(styles.item, { [styles.active]: path === link })} key={title} href={link}>
            {title}
          </A>
        ))}
    </div>
  );
};

export default MobileMenu;
