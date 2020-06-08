import styled, { keyframes } from 'styled-components';
import { glitchEffect } from '@src/common/styles';

export const LogoAnimation = styled.div`
  font-size: 35px;
  font-family: Sedgwick Ave, cursive;
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

export const LogoSText = styled.div`
  position: absolute;
  color: #fff;
  font-size: 15px;
  bottom: 10px;
  width: 100%;
  font-family: 'Architects Daughter', sans-serif;
`;

export const Preload = styled.div`
  position: fixed;
  background: #1b1b1b;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

export const PreloadInner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 400px;
  max-width: 100%;
  height: 160px;
  text-align: center;
`;

export const PreloadSpan = styled.div`
  color: #878787;
  margin-top: 9px;
  font-size: 9px;
  letter-spacing: 3px;
  margin-bottom: 30px;
  display: block;
`;

export const ProgressBar = styled.div`
  text-align: left;
`;

export const ProgressBarBg = styled.div`
  height: 1px;
  background: #01b3bf;
  overflow: hidden;
`;

const pulse = keyframes`
  0% {
      margin-left: -20%;
  }
    100% {
      margin-left: 100%;
  }
`;

export const ProgressBarBgDone = styled.div`
  height: 1px;
  background: #5bf4fe;
  width: 20%;
  animation: ${pulse} 1.5s linear infinite;
`;

export const Logo = styled.div`
  position: relative;
  height: 85px;
  width: 100px;
  margin: 0 auto;
`;
