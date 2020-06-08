import React from 'react';
import Particles from 'react-particles-js';
import { ParticlesParams } from '@src/constants';

function particlesHOC(Component) {
  return function ParticlesWrapper() {
    return (
      <React.Fragment>
        <Particles
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: -100,
          }}
          params={ParticlesParams}
        />
        <Component />
      </React.Fragment>
    );
  };
}

export default particlesHOC;
