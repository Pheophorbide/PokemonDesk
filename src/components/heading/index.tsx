import React from 'react';
import classnames from 'classnames';

import styles from './Heading.module.scss';

export enum HeaderType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}

interface HeadingInterface {
  type: HeaderType;
  className?: string;
}

const Heading: React.FC<HeadingInterface> = ({ type, children, className }) => {
  function getHeaderComponent() {
    switch (type) {
      case HeaderType.h1:
        return <h1 className={classnames(styles.title, styles.h1, className)}>{children}</h1>;
      case HeaderType.h2:
        return <h2 className={classnames(styles.title, styles.h2, className)}>{children}</h2>;
      case HeaderType.h3:
        return <h3 className={classnames(styles.title, styles.h3, className)}>{children}</h3>;
      case HeaderType.h4:
        return <h4 className={classnames(styles.title, styles.h4, className)}>{children}</h4>;
      case HeaderType.h5:
        return <h5 className={classnames(styles.title, styles.h5, className)}>{children}</h5>;
      case HeaderType.h6:
        return <h6 className={classnames(styles.title, styles.h6, className)}>{children}</h6>;
      default:
        return <h1 className={classnames(styles.title, styles.h1, className)}>{children}</h1>;
    }
  }

  return getHeaderComponent();
};

export default Heading;
