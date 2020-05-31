import React, { useState } from 'react';
import { media, PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import styled, { css, keyframes } from 'styled-components';
import TextAnimation from '@src/components/TextAnimation';
import Map from '../../images/map.png';

const ContactGrid = styled.div`
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
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

const animationFadeInUp = css`
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: ${fadeInUp};
`;

const MapContainer = styled.div`
  grid-area: map;
  overflow: auto;
`;

const TextContainer = styled.div`
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

const FormContainer = styled.div``;

const TextArea = styled.textarea`
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

const TextAreaContainer = styled.div``;

const Input = styled.input`
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

const InputContainer = styled.div`
  width: 100%;
  display: flex;
`;

const Description = styled.div`
  font-family: 'Roboto', sans-serif;
  color: white;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 14px;
`;

const Images = styled.img`
  background-image: url(${Map});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: auto;
`;

const InputSpanAnimation = styled.span`
  position: absolute;
  display: inline-block;
  width: ${({ isFocus }) => (isFocus ? '100%' : 0)};
  height: 2px;
  background: #08fdd8;
  transition: all ease-in-out 0.15s;
  left: 0;
  bottom: 0;
`;

const AnimatedInputContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  font-family: 'Droid Sans', sans-serif;
  ${({ styles }) => (styles ? styles : '')};

  ${animationFadeInUp}
`;

const AnimatedInput = ({ Component, containerStyles, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <AnimatedInputContainer styles={containerStyles}>
      <Component
        {...props}
        onFocus={(e) => {
          const { onFocus } = props;
          if (onFocus) {
            onFocus(e);
          }

          setIsFocus(true);
        }}
        onBlur={(e) => {
          const { onBlur } = props;
          if (onBlur) {
            onBlur(e);
          }

          setIsFocus(false);
        }}
      />
      <InputSpanAnimation isFocus={isFocus} />
    </AnimatedInputContainer>
  );
};

const Button = styled.a`
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

const Contact = () => (
  <ContactGrid>
    <TextContainer>
      <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
        <PageTitle>Contact me</PageTitle>
      </TextAnimation>
      <Description>
        I am interested in freelance opportunities – especially ambitious or large projects.
        However, if you have other request or question, don’t hesitate to contact me using below
        form either.
      </Description>
      <FormContainer>
        <InputContainer>
          <AnimatedInput
            containerStyles={css`
              margin-right: 5px;
            `}
            type="text"
            placeholder="Name"
            Component={Input}
          />
          <AnimatedInput
            containerStyles={css`
              margin-left: 5px;
            `}
            type="text"
            placeholder="Email"
            Component={Input}
          />
        </InputContainer>
        <InputContainer>
          <AnimatedInput type="text" placeholder="Subject" Component={Input} />
        </InputContainer>
        <TextAreaContainer>
          <AnimatedInput placeholder="Message" Component={TextArea} />
        </TextAreaContainer>
        <Button>SEND</Button>
      </FormContainer>
    </TextContainer>
    <MapContainer>
      <Images src={Map} />
    </MapContainer>
  </ContactGrid>
);

export default Contact;
