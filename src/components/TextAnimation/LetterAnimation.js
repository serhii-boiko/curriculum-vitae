import React, { useState } from 'react';
import { Span } from './styles';
import PropTypes from 'prop-types';

const LatterAnimation = ({ position, children, mainAnimation, hoverAnimation }) => {
  const [animation, setAnimation] = useState({
    processing: false,
    main: true,
    hover: false,
  });

  return (
    <Span
      mainAnimation={mainAnimation}
      hoverAnimation={hoverAnimation}
      position={position}
      onMouseEnter={() => {
        setAnimation((state) => ({ ...state, processing: true, hover: true }));
      }}
      animated={animation}
      onAnimationEnd={(e) => {
        e.stopPropagation();
        setAnimation((state) => ({ ...state, processing: false, main: false, hover: false }));
      }}
    >
      {children}
    </Span>
  );
};

LatterAnimation.propTypes = {
  children: PropTypes.element,
  position: PropTypes.number,
  mainAnimation: PropTypes.object,
  hoverAnimation: PropTypes.object,
};

export default LatterAnimation;
