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
    path: '/',
    exact: true,
    component: Home
  }, {
    path: '/contact',
    component: Contact
  }, {
    path: '/my-work',
    component: MyWork
  }, {
    path: '/skills',
    component: Skills
  }, {
    path: '/about',
    component: About
  },
];

const AppRoute = () => (
  <Grid>
    <Switch>
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.component}
        />
      ))}
      <Route component={NotFound}/>
    </Switch>
  </Grid>
);

export default AppRoute;
