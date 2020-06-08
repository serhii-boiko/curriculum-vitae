import styled, { css } from 'styled-components';

export const Span = styled.span`
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
