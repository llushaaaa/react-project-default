import React from 'react';

import styles from './App.scss';

interface IProps {
  title?: string;
}

export const App = ({ title }: IProps) => (
  <h1 className={styles.container}>{title || 'Hello World'}</h1>
);
