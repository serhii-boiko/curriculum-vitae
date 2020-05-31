import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

import './fonts/fonts.scss';

const rootEl = document.getElementById('root');

setTimeout(() => {
  ReactDOM.render(<Main />, rootEl);
}, 1000);
