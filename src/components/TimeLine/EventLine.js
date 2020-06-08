import React from 'react';
import PropTypes from 'prop-types';
import { Motion, spring } from 'react-motion';
import { Line } from './styles';

const EventLine = ({ left, width, fillingMotion, backgroundColor }) => (
  <Motion
    style={{
      tWidth: spring(width, fillingMotion),
      tLeft: spring(left, fillingMotion),
    }}
  >
    {({ tWidth, tLeft }) => (
      <Line aria-hidden="true" tWidth={tWidth} tLeft={tLeft} backgroundColor={backgroundColor} />
    )}
  </Motion>
);

EventLine.propTypes = {
  left: PropTypes.number,
  width: PropTypes.number,
  fillingMotion: PropTypes.shape({
    stiffness: PropTypes.number,
    damping: PropTypes.number,
  }),
  backgroundColor: PropTypes.string,
};

export default EventLine;
