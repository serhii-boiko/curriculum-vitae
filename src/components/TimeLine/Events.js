import React from 'react';
import PropTypes from 'prop-types';
import TimelineDot from './TimelineDot';
import { List } from './styles';

const Events = ({ events, selectedIndex, handleDateClick, labelWidth }) => (
  <List>
    {events.map((event, index) => (
      <TimelineDot
        distanceFromOrigin={event.distance}
        label={event.label}
        date={event.date}
        index={index}
        key={index}
        onClick={handleDateClick}
        selected={selectedIndex}
        labelWidth={labelWidth}
      />
    ))}
  </List>
);

Events.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedIndex: PropTypes.number,
  handleDateClick: PropTypes.func,
  labelWidth: PropTypes.number.isRequired,
};

export default Events;
