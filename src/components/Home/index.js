import React from 'react';
import TextAnimation from '@src/components/TextAnimation';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';

const HomeContainer = styled.div`
  position: absolute;
  left: 10%;
  top: 50%;
  transform: translateY(-50%);
  max-height: 90%;
`;

const MainText = styled.div`
  font-family: 'Liberation Sans Bold', sans-serif;
  font-size: 65px;
  color: white;
  line-height: 65px;
  font-weight: bolder;
`;

const SpecWrapper = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: 'Cousine', sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: #8d8d8d;
`;

const ButtonWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

const Button = styled(Link)`
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

const Home = () => (
  <HomeContainer>
    <MainText>
      <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
        <div>Hi,</div>
        <div>I’m Serhii,</div>
        <div>web developer.</div>
      </TextAnimation>
    </MainText>
    <SpecWrapper>
      <div>Full-Stack Developer / Front-End Developer</div>
    </SpecWrapper>
    <ButtonWrapper>
      <Button to="/contact">contact me</Button>
    </ButtonWrapper>
  </HomeContainer>
);

export default Home;
