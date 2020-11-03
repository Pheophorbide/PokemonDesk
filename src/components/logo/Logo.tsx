import React from 'react';
import classnames from 'classnames';
import LogoIcon from '../../svg/logo.svg';

import styles from './Logo.module.scss';

type LogoType = {
  className?: string;
};

const Logo = ({ className }: LogoType) => (
  <div className={classnames(styles.logo, className)}>
    <LogoIcon />
  </div>
);

Logo.defaultProps = {
  className: '',
};

export default Logo;
