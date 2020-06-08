import React, { useState, useEffect } from 'react';
import { Motion, spring } from 'react-motion';
import PropTypes from 'prop-types';

import Events from './Events';
import EventLine from './EventLine';
import HorizontalTimelineButtons from './HorizontalTimelineButtons';

import constants from '../../common/constants';
import {
  BarWrapper,
  BarContainer,
  EventLineContainer,
  stylesForeground,
  stylesOutline,
} from './styles';

const EventsBar = ({
  visibleWidth,
  totalWidth,
  labelWidth,
  width,
  height,
  barPaddingLeft,
  barPaddingRight,
  fillingMotion,
  events,
  index,
  indexClick,
  selectedIndex,
  isKeyboardEnabled,
  isTouchEnabled,
}) => {
  const [position, setPosition] = useState(0);
  const [maxPosition, setMaxPosition] = useState(Math.min(visibleWidth - totalWidth, 0));

  const touch = {
    coors: {
      x: 0,
      y: 0,
    },
    isSwiping: false,
    started: false,
    threshold: 3,
  };

  const slideToPosition = (position) => {
    const maxPosition = Math.min(visibleWidth - totalWidth, 0);
    setPosition(Math.max(Math.min(0, position), maxPosition));
    setMaxPosition(maxPosition);
  };

  const handleTouchStart = (event) => {
    const touchObj = event.touches[0];

    touch.coors.x = touchObj.pageX;
    touch.coors.y = touchObj.pageY;
    touch.isSwiping = false;
    touch.started = true;
  };

  const handleTouchMove = (event) => {
    if (!touch.started) {
      handleTouchStart(event);
      return;
    }

    const touchObj = event.touches[0];
    const dx = Math.abs(touch.coors.x - touchObj.pageX);
    const dy = Math.abs(touch.coors.y - touchObj.pageY);

    const isSwiping = dx > dy && dx > touch.threshold;

    if (isSwiping === true || dx > touch.threshold || dy > touch.threshold) {
      touch.isSwiping = isSwiping;
      const dX = touch.coors.x - touchObj.pageX;
      touch.coors.x = touchObj.pageX;
      setPosition(position - dX);
    }

    if (touch.isSwiping !== true) {
      return;
    }

    event.preventDefault();
  };

  const handleTouchEnd = () => {
    slideToPosition(position);
    touch.coors.x = 0;
    touch.coors.y = 0;
    touch.isSwiping = false;
    touch.started = false;
  };

  const updateSlide = (direction) => {
    if (direction === constants.RIGHT) {
      slideToPosition(position - visibleWidth + labelWidth);
    } else if (direction === constants.LEFT) {
      slideToPosition(position + visibleWidth - labelWidth);
    }
  };

  const handleKeydown = (event) => {
    if (isKeyboardEnabled) {
      if (event.keyCode === constants.LEFT_KEY || event.keyCode === constants.RIGHT_KEY) {
        updateSlide(constants.KEYMAP[event.keyCode]);
      } else if (event.keyCode === constants.UP_KEY) {
        indexClick(Math.min(selectedIndex + 1, events.length - 1));
      } else if (event.keyCode === constants.DOWN_KEY) {
        indexClick(Math.max(selectedIndex - 1, 0));
      }
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', handleKeydown);
    return function() {
      document.body.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  useEffect(() => {
    const selectedEvent = events[index];
    slideToPosition(-(selectedEvent.distance - visibleWidth / 2));
  }, []);

  useEffect(() => {
    const selectedEvent = events[index];
    const minVisible = -position;
    const maxVisible = minVisible + visibleWidth;

    if (selectedEvent.distance > minVisible + 10 && selectedEvent.distance < maxVisible - 10) {
      slideToPosition(position);
    } else {
      slideToPosition(-(selectedEvent.distance - visibleWidth / 2));
    }
  }, [index, visibleWidth]);

  const touchEvents = isTouchEnabled
    ? {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
      }
    : {};

  const filledValue = events[index].distance - barPaddingLeft;
  const eventLineWidth = totalWidth - barPaddingLeft - barPaddingRight;

  return (
    <BarWrapper width={width} height={height} {...touchEvents}>
      <BarContainer>
        <Motion
          style={{
            X: spring(position, 150),
          }}
        >
          {({ X }) => (
            <EventLineContainer totalWidth={totalWidth} X={X}>
              <EventLine
                left={barPaddingLeft}
                width={eventLineWidth}
                fillingMotion={fillingMotion}
                backgroundColor={stylesOutline}
              />
              <EventLine
                left={barPaddingLeft}
                width={filledValue}
                fillingMotion={fillingMotion}
                backgroundColor={stylesForeground}
              />
              <Events
                events={events}
                selectedIndex={index}
                handleDateClick={indexClick}
                labelWidth={labelWidth}
              />
            </EventLineContainer>
          )}
        </Motion>
      </BarContainer>
      <HorizontalTimelineButtons
        maxPosition={maxPosition}
        position={position}
        updateSlide={updateSlide}
      />
    </BarWrapper>
  );
};

EventsBar.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  events: PropTypes.arrayOf(
    PropTypes.shape({
      distance: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
  isTouchEnabled: PropTypes.bool.isRequired,
  totalWidth: PropTypes.number.isRequired,
  visibleWidth: PropTypes.number.isRequired,
  index: PropTypes.number,
  indexClick: PropTypes.func.isRequired,
  labelWidth: PropTypes.number.isRequired,
  fillingMotion: PropTypes.object.isRequired,
  barPaddingRight: PropTypes.number.isRequired,
  barPaddingLeft: PropTypes.number.isRequired,
  selectedIndex: PropTypes.number,
  isKeyboardEnabled: PropTypes.bool,
};

export default EventsBar;
