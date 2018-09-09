/* eslint-disable global-require */

import { applyMiddleware, createStore, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import reducers from './rootReducer';


export default function configureStore(initialState, history) {
  const newCompose = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
  const routeMiddleware = routerMiddleware(history);
  const middlewares = [routeMiddleware];

  if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(reducers, initialState, newCompose(applyMiddleware(...middlewares)));

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}