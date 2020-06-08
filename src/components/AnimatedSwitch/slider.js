import React, { useState } from 'react';
import { Page, LoadingAnimation, AnimationWrapper } from './styles';
import Loading from '@src/components/Loading';
import PropTypes from 'prop-types';

const Slider = ({ step, animationCallback, fromPositionLoading, toPositionLoading, children }) => {
  const [loadingShow, setLoadingShow] = useState(false);

  const pageAnimationEnd = () => {
    if (step === 'ONE') {
      setLoadingShow(true);
    } else if (step === 'TWO') {
      animationCallback && animationCallback();
    }
  };

  const loadingAnimationEnd = () => {
    animationCallback && animationCallback();
    setLoadingShow(false);
  };

  return (
    <AnimationWrapper>
      {loadingShow ? (
        <LoadingAnimation
          onAnimationEnd={loadingAnimationEnd}
          from={fromPositionLoading}
          to={toPositionLoading}
        >
          <Loading />
        </LoadingAnimation>
      ) : (
        <Page step={step} onAnimationEnd={pageAnimationEnd}>
          {children}
        </Page>
      )}
    </AnimationWrapper>
  );
};

Slider.propTypes = {
  step: PropTypes.string,
  animationCallback: PropTypes.func,
  fromPositionLoading: PropTypes.string,
  toPositionLoading: PropTypes.string,
  children: PropTypes.element,
};

Slider.LEFT = 'LEFT';
Slider.RIGHT = 'RIGHT';

export default Slider;
