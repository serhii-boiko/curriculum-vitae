import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from '@src/app';

const MainApp = () => (
  <Router>
    <AppRoute/>
  </Router>
);

export default hot(module)(MainApp);
