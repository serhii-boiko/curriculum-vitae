import React from 'react';
import TextAnimation from '@src/components/TextAnimation';
import { ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import { HomeContainer, MainText, Span, SpecWrapper, ButtonWrapper, Button } from './styles';

const Home = () => (
  <HomeContainer>
    <MainText>
      <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
        <div>Hi,</div>
        <div>
          I’m{' '}
          <Span exclude data-text="S">
            S
          </Span>
          erhii,
        </div>
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
