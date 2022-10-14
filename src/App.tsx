import React from 'react';

interface IProps {
  title: string;
}

export const App = ({ title }: IProps) => <h1>{title}</h1>;
