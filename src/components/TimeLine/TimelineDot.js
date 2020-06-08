import React from 'react';
import PropTypes from 'prop-types';
import { DotFuture, DotPast, DotPresent, LinkListItem } from './styles';

const TimelineDot = ({ selected, index, distanceFromOrigin, date, label, labelWidth, onClick }) => {
  let DotDot = DotFuture;
  if (index < selected) {
    DotDot = DotPast;
  } else if (index === selected) {
    DotDot = DotPresent;
  }

  return (
    <LinkListItem
      distanceFromOrigin={distanceFromOrigin}
      labelWidth={labelWidth}
      key={date}
      onClick={() => onClick(index)}
    >
      {label}
      <DotDot labelWidth={labelWidth} />
    </LinkListItem>
  );
};

TimelineDot.propTypes = {
  selected: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  labelWidth: PropTypes.number.isRequired,
  distanceFromOrigin: PropTypes.number.isRequired,
};

export default TimelineDot;
