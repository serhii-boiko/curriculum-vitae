import styled, { keyframes } from 'styled-components';

export const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  text-align: center;
  overflow: hidden;
  transition: 0.5s;
  margin: 20px;
  z-index: 20;
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: translateY(-15px);
  }
`;

export const Box = styled.div``;

export const Percent = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  -webkit-box-shadow: none;
  box-shadow: inset 0 0 50px #000;
  background: #222;
`;

export const Number = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const TextContainer = styled.h2`
  color: #a5a5a5;
  font-weight: 700;
  font-size: 25px;
  transition: 0.5s;
  font-family: 'Cousine', sans-serif;

  ${Card}:hover & {
    color: #fff;
    font-size: 30px;
  }
`;

export const SVGContainer = styled.svg`
  position: relative;
  width: 150px;
  height: 150px;
  z-index: 50;
`;

export const Circle1 = styled.circle`
  width: 100%;
  height: 100%;
  fill: none;
  stroke: #191919;
  stroke-width: 5;
  stroke-linecap: round;
  transform: translate(5px, 5px);
`;

export const circleAnimation = keyframes`
  0% {
    stroke-dashoffset: 440;
  }
`;

export const Circle2 = styled(Circle1)`
  stroke-dasharray: 440;
  stroke: #08fdd8;
  animation: ${circleAnimation} 1s linear;
  stroke-dashoffset: ${({ percentage }) => `calc(440 - (440 * ${percentage}) / 100)`};
`;
