import React from 'react';
import { A, usePath } from 'hookrouter';
import classnames from 'classnames';
import { MenuItemType } from '../../routes';

import styles from './Desktop.module.scss';

interface DesktopMenuType {
  menu: MenuItemType[];
}

const DesktopMenu: React.FC<DesktopMenuType> = ({ menu }) => {
  const path = usePath();

  return (
    <div className={styles.menu}>
      {menu &&
        menu.map(({ title, link }) => (
          <A
            key={title}
            className={classnames(styles.item, {
              [styles.active]: path === link,
            })}
            href={link}>
            {title}
          </A>
        ))}
    </div>
  );
};

export default DesktopMenu;
