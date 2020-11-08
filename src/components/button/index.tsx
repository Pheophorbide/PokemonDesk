import React from 'react';
import classnames from 'classnames';

import styles from './Button.module.scss';

export enum SizeTypes {
  small = 'small',
  large = 'large',
}

export enum ColorTypes {
  green = 'green',
  yellow = 'yellow',
}

interface ButtonInterface {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  size: SizeTypes;
  color: ColorTypes;
  isWide: boolean;
}

const Button: React.FC<ButtonInterface> = ({ children, onClick, size, color, isWide }) => (
  <button
    className={classnames(styles.root, {
      [styles.large]: size === SizeTypes.large,
      [styles.small]: size === SizeTypes.small,
      [styles.green]: color === ColorTypes.green,
      [styles.yellow]: color === ColorTypes.yellow,
      [styles.wide]: isWide,
    })}
    type="button"
    onClick={onClick}>
    {children}
  </button>
);

Button.defaultProps = {
  size: SizeTypes.large,
  color: ColorTypes.green,
  isWide: false,
};

export default Button;
