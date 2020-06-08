import styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { glitchEffect } from '@src/common/styles';

export const HomeContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  max-height: 90%;
`;

export const MainText = styled.div`
  font-family: 'Liberation Sans Bold', sans-serif;
  font-size: 65px;
  color: white;
  line-height: 65px;
  font-weight: bolder;
`;

export const SpecWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Cousine', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8d8d8d;
`;

export const ButtonWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Button = styled(Link)`
  margin-top: 15px;
  color: #08fdd8;
  display: inline-block;
  width: 170px;
  height: 40px;
  line-height: 40px;
  position: relative;
  overflow: hidden;
  border: 2px solid #08fdd8;
  transition: color 0.5s;
  text-decoration: none;
  text-transform: uppercase;
  font-family: 'Cousine', sans-serif;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: #202020;
    background: #08fdd8;
  }
`;

const animation = keyframes`
  0% {
    opacity: 0;
  }
  10% {
    transform: matrix3d(0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  13.2% {
    transform: matrix3d(.652, -.763, 0, 0, .871, .501, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  14.3% {
    transform: matrix3d(.797, -.614, 0, 0, .768, .649, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  16.41% {
    transform: matrix3d(.953, -.325, 0, 0, .534, .853, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  18.61% {
    transform: matrix3d(1.002, -.083, 0, 0, .296, .961, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  22.71% {
    transform: matrix3d(.992, .149, 0, 0, -.001, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  22.91% {
    transform: matrix3d(.991, .154, 0, 0, -.01, 1.003, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  27.22% {
    transform: matrix3d(.984, .181, 0, 0, -.111, .994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  28.92% {
    transform: matrix3d(.987, .163, 0, 0, -.116, .994, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  35.23% {
    transform: matrix3d(.998, .066, 0, 0, -.067, .998, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  38.33% {
    transform: matrix3d(1, .028, 0, 0, -.037, .999, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  41.43% {
    transform: matrix3d(1, .004, 0, 0, -.015, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  49.44% {
    transform: matrix3d(1, -.013, 0, 0, .007, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  56.46% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  61.66% {
    transform: matrix3d(1, .001, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  81.48% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  83.98% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
  100% {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
  }
`;

export const Span = styled.span`
  display: inline-block;
  animation-name: ${() =>
    css`
      ${animation}
    `};
  animation-delay: ${({ position }) => `${100 * position}ms`};
  animation-duration: 1000ms;
  animation-iteration-count: 1;
  animation-fill-mode: both;

  &:hover {
    color: #08fdd8;
  }

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    color: #ff00c1;
    animation: ${glitchEffect} 3s infinite;
  }

  &::after {
    color: #3498db;
    animation: ${glitchEffect} 2s infinite;
  }
`;
