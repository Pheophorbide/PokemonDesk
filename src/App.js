import React from 'react';
import classnames from 'classnames'

import './custom.css'
import styles from './App.modules.scss';

export const App = () => (
    <div className={classnames(styles.header, 'color')}>App comp!</div>
)
