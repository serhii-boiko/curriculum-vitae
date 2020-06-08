import React, { cloneElement } from 'react';
import deepMap from '@src/common/deepMap';
import LatterAnimation from './LetterAnimation';
import PropTypes from 'prop-types';

const TextAnimation = ({ children, mainAnimation, hoverAnimation }) => {
  let position = 0;

  const textLoop = (text) =>
    text.split('').map((letter) => {
      if (letter === ' ') {
        return letter;
      }

      const p = position + 1;
      position += 1;

      return (
        <LatterAnimation
          key={p}
          position={p}
          mainAnimation={mainAnimation}
          hoverAnimation={hoverAnimation}
        >
          {letter}
        </LatterAnimation>
      );
    });

  return (
    <div>
      {deepMap(children, (child) => {
        if (typeof child === 'string') {
          return textLoop(child);
        }
        const message = child.props && child.props.children;
        if (message && typeof message === 'string' && !child.props.exclude) {
          return cloneElement(child, {
            ...child.props,
            children: textLoop(message),
          });
        }

        const p = position + 1;
        position += 1;
        return cloneElement(child, {
          ...child.props,
          position: p,
        });
      })}
    </div>
  );
};

TextAnimation.propTypes = {
  children: PropTypes.element,
  mainAnimation: PropTypes.object,
  hoverAnimation: PropTypes.object,
};

export default TextAnimation;
