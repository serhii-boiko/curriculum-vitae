import React from 'react';
import ReactDOM from 'react-dom';
import MainApp from './MainApp';

const rootEl = document.getElementById('root');

setTimeout(() => {
  ReactDOM.render(<MainApp/>, rootEl);
}, 1000);
