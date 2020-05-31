import React, { cloneElement, useState } from 'react';
import deepMap from '@src/common/deepMap';
import styled, { css } from 'styled-components';

const Span = styled.span`
  display: inline-block;
  animation-name: ${({ animated, mainAnimation }) =>
    animated.main
      ? css`
          ${mainAnimation}
        `
      : ''};
  animation-delay: ${({ position }) => `${100 * position}ms`};
  animation-duration: 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  ${({ animated, hoverAnimation }) =>
    animated.hover &&
    hoverAnimation &&
    css`
      animation-name: ${hoverAnimation};
      animation-duration: 1000ms;
      animation-iteration-count: 1;
      animation-fill-mode: both;
      animation-delay: 0ms;
    `}

  &:hover {
    color: #08fdd8;
  }
`;

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
        return child;
      })}
    </div>
  );
};

export default TextAnimation;
