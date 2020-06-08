import React from 'react';
import PropTypes from 'prop-types';
import constants from '../../common/constants';
import { Arrow } from './styles';

const HorizontalTimelineButtons = ({ updateSlide, position, maxPosition }) => {
  const buttonBackEnabled = Math.round(position) < 0;
  const buttonForwardEnabled = Math.round(position) > Math.round(maxPosition);

  return (
    <ul>
      <Arrow
        key={constants.LEFT}
        onClick={() => updateSlide(constants.LEFT)}
        active={buttonBackEnabled}
        type={constants.LEFT}
      />
      <Arrow
        key={constants.RIGHT}
        onClick={() => updateSlide(constants.RIGHT)}
        active={buttonForwardEnabled}
        type={constants.RIGHT}
      />
    </ul>
  );
};

HorizontalTimelineButtons.propTypes = {
  updateSlide: PropTypes.func.isRequired,
  position: PropTypes.number.isRequired,
  maxPosition: PropTypes.number,
};

export default HorizontalTimelineButtons;
