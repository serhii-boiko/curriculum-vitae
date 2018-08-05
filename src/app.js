import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Contact from '@src/contact';
import Home from '@src/home';
import MyWork from '@src/mywork';
import Skills from '@src/skills';
import About from '@src/about';
import NotFound from '@src/404';
import Grid from '@src/grid';

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

const AppRoute = () => (
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
);

export default AppRoute;
