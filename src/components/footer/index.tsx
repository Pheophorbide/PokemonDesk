import React from 'react';

import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.footer}>
    <div className={styles.item}>Ours Team</div>
    <div className={styles.item}>
      Make with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </div>
  </div>
);

export default Footer;
