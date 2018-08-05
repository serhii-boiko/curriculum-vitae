/* eslint-disable no-undef */

import { hot } from 'react-hot-loader';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoute from '@src/app';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faHome,
  faPrint,
  faDesktop,
  faKeyboard,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

library.add(faHome, faPrint, faDesktop, faKeyboard, faEnvelope);

const MainApp = () => (
  <Router>
    <AppRoute />
  </Router>
);

export default hot(module)(MainApp);
