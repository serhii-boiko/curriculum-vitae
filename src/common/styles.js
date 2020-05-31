import styled, { css, keyframes } from 'styled-components';

const breakpoints = {
  xxGiant: '2112px',
  xGiant: '1888px',
  giant: '1440px',
  desktop: '1216px',
  tablet: '992px',
  phone: '768px',
  sPhone: '576px',
};

function getSizeFromBreakpoint(breakpointValue, breakpoints = breakpoints) {
  if (breakpoints[breakpointValue]) {
    return breakpoints[breakpointValue];
  } else if (parseInt(breakpointValue)) {
    return breakpointValue;
  } else {
    console.error('styled-media-query: No valid breakpoint or size specified for media.');
    return '0';
  }
}

const lessThan = (breakpoint) => (...args) => css`
  @media (max-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
    ${css(...args)}
  }
`;

const greaterThan = (breakpoint) => (...args) => css`
  @media (min-width: ${getSizeFromBreakpoint(breakpoint, breakpoints)}) {
    ${css(...args)}
  }
`;

const between = (firstBreakpoint, secondBreakpoint) => (...args) => css`
  @media (min-width: ${getSizeFromBreakpoint(
      firstBreakpoint,
      breakpoints
    )}) and (max-width: ${getSizeFromBreakpoint(secondBreakpoint, breakpoints)}) {
    ${css(...args)}
  }
`;

export const color = {
  Background: '#0a0a0a',
  Menu: '#1e1e1e',
  Font: '#e6e6e6',
  Main1: '#fe2cb5',
  Main2: '#5bf4fe',
  $color2: '#4b4b4b',
  $color3: '#373737',
};

export const media = {
  lessThan,
  greaterThan,
  between,
};

export const PageTitle = styled.div`
  font-family: 'Coolvetica-Regular', sans-serif;
  font-size: 60px;
  color: #08fdd8;
  line-height: 50px;
  font-weight: normal;
`;

export const ScaleHoverAnimation = keyframes`
  0% {
    transform: scale3d(1, 1, 1);
  }
  
  30% {
    transform: scale3d(1.25, 0.75, 1);
  }
  
  40% {
    transform: scale3d(0.75, 1.25, 1);
  }
  
  50% {
    transform: scale3d(1.15, 0.85, 1);
  }
  
  65% {
    transform: scale3d(0.95, 1.05, 1);
  }
  
  75% {
    transform: scale3d(1.05, 0.95, 1);
  }
  
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

export const ScaleTextShowAnimation = keyframes`
  0%, 100%, 20%, 40%, 60%, 80%{
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  
  0% { 
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
  
  20%{
    transform: scale3d(1.1, 1.1, 1.1);
  }
  
  40%{
    transform: scale3d(0.9, 0.9, 0.9);
  }
  
  60%{
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  
  80%{
    transform: scale3d(0.97, 0.97, 0.97);
  }
  
  100%{
    opacity:1;
    transform: scale3d(1, 1, 1);
  }
`;
