import React, { useState, useEffect } from 'react';
import Slider from './slider';
import PropTypes from 'prop-types';

const SlideOut = ({ children, uniqKey }) => {
  const [state, setState] = useState({
    step: null,
    curChild: children,
    curUniqId: uniqKey,
    prevChild: null,
    prevUniqId: null,
    animationCallback: null,
  });

  const swapChildren = () => {
    setState((state) => ({
      ...state,
      step: 'TWO',
      prevChild: null,
      prevUniqId: null,
      animationCallback: () =>
        setState((state) => ({ ...state, step: null, animationCallback: null })),
    }));
  };

  useEffect(() => {
    const prevUniqId = state.curUniqId || state.curChild.type;
    const uniqId = uniqKey || children.type;

    if (prevUniqId && prevUniqId !== uniqId) {
      setState((state) => {
        return {
          ...state,
          step: 'ONE',
          curChild: children,
          curUniqId: uniqId,
          prevChild: state.curChild,
          prevUniqId,
          animationCallback: swapChildren,
        };
      });
    }
  });

  return (
    <Slider
      step={state.step}
      animationCallback={state.animationCallback}
      fromPositionLoading={Slider.LEFT}
      toPositionLoading={Slider.LEFT}
    >
      {state.prevChild || state.curChild}
    </Slider>
  );
};

SlideOut.propTypes = {
  children: PropTypes.element,
  uniqKey: PropTypes.string,
};

export default SlideOut;
