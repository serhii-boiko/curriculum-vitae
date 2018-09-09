import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';

const rootEl = document.getElementById('root');

setTimeout(() => {
  ReactDOM.render(<Main />, rootEl);
}, 1000);
