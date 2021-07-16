import { Route, Switch } from 'react-router-dom';
import React from 'react';
import SlideOut from './slideOut';

const animateSwitch =
  (CustomSwitch, AnimatorComponent) =>
  ({ children }) =>
    (
      <Route
        render={({ location }) => (
          <AnimatorComponent uniqKey={location.pathname}>
            <CustomSwitch location={location}>{children}</CustomSwitch>
          </AnimatorComponent>
        )}
      />
    );

export default animateSwitch(Switch, SlideOut);
