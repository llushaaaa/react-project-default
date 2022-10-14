import React from 'react';

import './App.scss';

interface IProps {
  title: string;
}

export const App = ({ title }: IProps) => (
  <h1 className="container">{title}</h1>
);
