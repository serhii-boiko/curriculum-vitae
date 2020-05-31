import React from 'react';
import styled, { keyframes } from 'styled-components';

const NavLogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: #000000;
  text-align: center;
  position: relative;
  line-height: 60px;
`;

const glitchEffect = keyframes`
  0% {
    left: -2px;
    top: -2px;
  }
  25% {
    left: 2px;
    top: 0px;
  }
  50% {
    left: -1px;
    top: 2px;
  }
  75% {
    left: 1px;
    top: -1px;
  }
  100% {
    left: 0px;
    top: -2px;
  }
`;

const Logo = styled.div`
  font-size: 35px;
  font-family: 'Fontdiner Swanky', cursive;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;

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

const NavLogo = ({ letter }) => (
  <NavLogoWrapper>
    <Logo data-text={letter}>{letter}</Logo>
  </NavLogoWrapper>
);

export default NavLogo;
