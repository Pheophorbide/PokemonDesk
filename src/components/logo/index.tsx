import React from 'react';
import classnames from 'classnames';
import { ReactComponent as LogoIcon } from '../../svg/logo.svg';

import styles from './Logo.module.scss';

type LogoType = {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Logo = ({ className, onClick }: LogoType) => (
  <div tabIndex={0} role="button" className={classnames(styles.logo, className)} onClick={onClick}>
    <LogoIcon />
  </div>
);

Logo.defaultProps = {
  className: '',
  onClick: () => null,
};

export default Logo;
