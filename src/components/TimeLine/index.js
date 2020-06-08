import React from 'react';
import PropTypes from 'prop-types';

import dimensions from 'react-dimensions';
import EventsBar from './EventsBar';
import { cummulativeSeperation } from '../../common/helpers';
import constants from '../../common/constants';

const defaultGetLabel = (date) => new Date(date).toDateString().substring(4);

const HorizontalTimeline = ({
  containerWidth,
  containerHeight,
  values,
  labelWidth,
  minEventPadding,
  maxEventPadding,
  linePadding,
  getLabel,
  isOpenEnding,
  isOpenBeginning,
  isTouchEnabled,
  isKeyboardEnabled,
  index,
  indexClick,
  fillingMotion,
}) => {
  if (!containerWidth) {
    return false;
  }

  const dates = values.map((value) => new Date(value));
  const distances = cummulativeSeperation(
    dates,
    labelWidth,
    minEventPadding,
    maxEventPadding,
    linePadding
  );

  const events = distances.map((distance, index) => ({
    distance,
    label: getLabel(values[index], index),
    date: values[index],
  }));

  const visibleWidth = containerWidth - 80;

  const totalWidth = Math.max(events[events.length - 1].distance + linePadding, visibleWidth);

  let barPaddingRight = 0;
  let barPaddingLeft = 0;
  if (!isOpenEnding) {
    barPaddingRight = totalWidth - events[events.length - 1].distance;
  }
  if (!isOpenBeginning) {
    barPaddingLeft = events[0].distance;
  }

  return (
    <EventsBar
      width={containerWidth}
      height={containerHeight}
      events={events}
      isTouchEnabled={isTouchEnabled}
      isKeyboardEnabled={isKeyboardEnabled}
      totalWidth={totalWidth}
      visibleWidth={visibleWidth}
      index={index}
      indexClick={indexClick}
      labelWidth={labelWidth}
      fillingMotion={fillingMotion}
      barPaddingRight={barPaddingRight}
      barPaddingLeft={barPaddingLeft}
    />
  );
};

HorizontalTimeline.propTypes = {
  containerWidth: PropTypes.number,
  containerHeight: PropTypes.number,
  index: PropTypes.number,
  values: PropTypes.arrayOf(PropTypes.string).isRequired,
  indexClick: PropTypes.func,
  getLabel: PropTypes.func,
  minEventPadding: PropTypes.number,
  maxEventPadding: PropTypes.number,
  linePadding: PropTypes.number,
  labelWidth: PropTypes.number,
  fillingMotion: PropTypes.object,
  slidingMotion: PropTypes.object,
  isOpenEnding: PropTypes.bool,
  isOpenBeginning: PropTypes.bool,
  isTouchEnabled: PropTypes.bool,
  isKeyboardEnabled: PropTypes.bool,
};

HorizontalTimeline.defaultProps = {
  getLabel: defaultGetLabel,

  minEventPadding: constants.MIN_EVENT_PADDING,
  maxEventPadding: constants.MAX_EVENT_PADDING,
  linePadding: constants.TIMELINE_PADDING,
  labelWidth: constants.DATE_WIDTH,

  fillingMotion: {
    stiffness: 150,
    damping: 25,
  },
  slidingMotion: {
    stiffness: 150,
    damping: 25,
  },
  isOpenEnding: true,
  isOpenBeginning: true,

  isTouchEnabled: true,
  isKeyboardEnabled: true,
};

export default dimensions({ elementResize: true })(HorizontalTimeline);
