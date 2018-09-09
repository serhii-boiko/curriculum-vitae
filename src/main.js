/* eslint-disable no-undef */

import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import createHistory from 'history/createHashHistory';
import configureStore from './store';

import Contact from '@src/components/contact';
import Home from '@src/components/home';
import MyWork from '@src/components/mywork';
import Skills from '@src/components/skills';
import About from '@src/components/about';
import NotFound from '@src/components/404';
import Grid from '@src/components/grid';

store={store} history={history}


const history = createHistory();
const initState = {};
const store = configureStore(initState, history);




const routes = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: Home,
  }, {
    key: 2,
    path: '/contact',
    component: Contact,
  }, {
    key: 3,
    path: '/my-work',
    component: MyWork,
  }, {
    key: 4,
    path: '/skills',
    component: Skills,
  }, {
    key: 5,
    path: '/about',
    component: About,
  },
];

const Main = ({ store, history }) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Grid>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.key}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
          <Route component={NotFound} />
        </Switch>
      </Grid>
    </ConnectedRouter>
  </Provider>
);

Main.propTypes = {
  store: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  history: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default hot(module)(Main);
