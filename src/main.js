import { hot } from 'react-hot-loader';

import 'normalize.css';

import { HashRouter, Route } from 'react-router-dom';
import React from 'react';
import Contact from '@src/components/Contact';
import Home from '@src/components/Home';
import MyWork from '@src/components/MyWork';
import Skills from '@src/components/Skills';
import About from '@src/components/About';
import NotFound from '@src/components/404';
import Grid from '@src/components/Grid';
import SwitchWithSlide from '@src/components/AnimatedSwitch';
import particlesHOC from '@src/components/ParticlesHOC';

const routes = [
  {
    key: 1,
    path: '/',
    exact: true,
    component: Home,
  },
  {
    key: 2,
    path: '/contact',
    component: Contact,
  },
  {
    key: 3,
    path: '/my-work',
    component: MyWork,
  },
  {
    key: 4,
    path: '/skills',
    component: Skills,
  },
  {
    key: 5,
    path: '/about',
    component: About,
  },
];

const Main = () => (
  <HashRouter>
    <Grid>
      <SwitchWithSlide>
        {routes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            exact={route.exact}
            component={particlesHOC(route.component)}
          />
        ))}
        <Route component={particlesHOC(NotFound)} />
      </SwitchWithSlide>
    </Grid>
  </HashRouter>
);

export default hot(module)(Main);
