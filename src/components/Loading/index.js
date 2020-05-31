import React from 'react';
import styled, { keyframes } from 'styled-components';

const Preload = styled.div`
  position: fixed;
  background: #1b1b1b;
  z-index: 2;
  height: 100%;
  width: 100%;
`;

const PreloadInner = styled.div`
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

const PreloadSpan = styled.div`
  color: #878787;
  margin-top: 9px;
  font-size: 9px;
  letter-spacing: 3px;
  margin-bottom: 30px;
  display: block;
`;

const ProgressBar = styled.div`
  text-align: left;
`;

const ProgressBarBg = styled.div`
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

const ProgressBarBgDone = styled.div`
  height: 1px;
  background: #5bf4fe;
  width: 20%;
  animation: ${pulse} 1.5s linear infinite;
`;

const Logo = styled.div`
  position: relative;
  height: 85px;
  width: 100px;
  margin: 0 auto;
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

const LogoAnimation = styled.div`
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

const LogoSText = styled.div`
  position: absolute;
  color: #fff;
  font-size: 15px;
  bottom: 10px;
  width: 100%;
  font-family: 'Architects Daughter', sans-serif;
`;

const Loading = () => (
  <Preload>
    <PreloadInner>
      <Logo>
        <LogoAnimation data-text="SB">SB</LogoAnimation>
        <LogoSText>SerhiiBoiko</LogoSText>
      </Logo>
      <PreloadSpan>Thinking...</PreloadSpan>
      <ProgressBar>
        <ProgressBarBg>
          <ProgressBarBgDone />
        </ProgressBarBg>
      </ProgressBar>
    </PreloadInner>
  </Preload>
);

export default Loading;
