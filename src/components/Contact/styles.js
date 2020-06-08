import styled, { css, keyframes } from 'styled-components';
import { media } from '@src/common/styles';
import Map from '@src/images/map.png';

export const ContactGrid = styled.div`
  display: grid;
  grid-template-areas: 'form map';
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  height: 100%;

  ${media.lessThan('desktop')`
    margin-top: 50px;
    grid-row-gap: 50px;
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      'form'
      'map';
  `}

  ${media.lessThan('phone')`
    margin-top: 65px;
  `};
`;

export const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const animationFadeInUp = css`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${fadeInUp};
`;

export const MapContainer = styled.div`
  grid-area: map;
  overflow: auto;

  ${media.lessThan('desktop')`
    min-height: 500px;
  `};
`;

export const TextContainer = styled.div`
  grid-area: form;
  display: flex;
  flex-direction: column;
  justify-content: center;
 
  ${media.greaterThan('giant')`
    padding-left: 100px;
    padding-right: 100px;
  `}
  
  ${media.lessThan('giant')`
    padding-left: 50px;
    padding-right: 50px;
  `}
  
  ${media.lessThan('tablet')`
    padding-left: 20px;
    padding-right: 20px;
  `}
    
  ${media.lessThan('phone')`
    padding-left: 10px;
    padding-right: 10px;
  `}
`;

export const FormContainer = styled.div``;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0;
  background: #2b2b2b;
  font-size: 16px;
  color: #8d8d8d;
  padding: 20px;
  box-sizing: border-box;
  min-height: 150px;
  margin-top: 10px;
  resize: none;

  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px #2b2b2b;
    border-radius: 3px;
    background-color: #2b2b2b;
  }

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #2b2b2b;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    -webkit-box-shadow: inset 0 0 6px #8d8d8d;
    background-color: #8d8d8d;
  }
`;

export const TextAreaContainer = styled.div``;

export const Input = styled.input`
  border: 0;
  background: #2b2b2b;
  height: 50px;
  font-size: 16px;
  color: #8d8d8d;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 10px;
  width: 100%;

  &:focus,
  &:active,
  &:hover {
    outline: 0;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 16px;
`;

export const InputSpanAnimation = styled.span`
  position: absolute;
  display: inline-block;
  width: ${({ isFocus }) => (isFocus ? '100%' : 0)};
  height: 2px;
  background: #08fdd8;
  transition: all ease-in-out 0.15s;
  left: 0;
  bottom: 0;
`;

export const AnimatedInputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: 'Droid Sans', sans-serif;
  ${({ styles }) => (styles ? styles : '')};

  ${animationFadeInUp}
`;

export const Button = styled.a`
  margin-top: 30px;
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
  float: right;
  cursor: pointer;

  ${animationFadeInUp}

  &:hover {
    color: #202020;
    background: #08fdd8;
  }
`;
