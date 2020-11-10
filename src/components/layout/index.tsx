import React from 'react';
import classnames from 'classnames';
import Header from '../header';
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
    <Header />
    <div className={classnames(styles.wrapper)}>
      <section className={className}>{children}</section>
      <Footer />
    </div>
  </div>
);

Layout.defaultProps = {
  color: 'white',
};

export default Layout;
