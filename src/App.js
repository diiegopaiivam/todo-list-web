import React from 'react';
import './App.css';
import Menu from './pages/Templates/Menu/index';
import Routes from './pages/routes';

export default props => (
  <div className="container">
    <Menu />
    <Routes />
  </div>
);
