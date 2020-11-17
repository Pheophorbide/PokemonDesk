import React from 'react';
import classnames from 'classnames';
import Footer from '../footer';

import styles from './Layout.module.scss';

interface LayoutInterface {
  className?: string;
  color?: 'white' | 'yellow';
}

const Layout: React.FC<LayoutInterface> = ({ children, className, color }) => (
  <div
    className={classnames(styles.root, {
      [styles.yellow]: color === 'yellow',
    })}>
    <section className={classnames(styles.wrapper, className)}>{children}</section>
    <Footer />
  </div>
);

Layout.defaultProps = {
  color: 'white',
};

export default Layout;
