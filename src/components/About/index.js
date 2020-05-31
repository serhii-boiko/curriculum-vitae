import React from 'react';
import styled from 'styled-components';
import { media, PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import TextAnimation from '@src/components/TextAnimation';
import HexGridImages from '@src/components/HexGridImages';

const AboutGrid = styled.div`
  display: grid;
  grid-template-areas: 'text images';
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  height: 100%;

  ${media.lessThan('desktop')`
    margin-top: 50px;
    grid-row-gap: 50px;
    grid-template-columns: auto;
    grid-template-rows: max-content auto;
    grid-template-areas:
      'text'
      'images';
  `}
`;

const TextContainer = styled.div`
  grid-area: text;
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

const ImagesContainer = styled.div`
  grid-area: images;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const DescriptionContainer = styled.div`
  color: white;
  margin-top: 50px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

const Paragraph = styled.div`
  margin-bottom: 15px;
`;

const About = () => (
  <AboutGrid>
    <TextContainer>
      <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
        <PageTitle>About me</PageTitle>
      </TextAnimation>
      <DescriptionContainer>
        <Paragraph>
          Professionally connected with the web development industry and information technology for
          many years.
        </Paragraph>
        <Paragraph>
          Well-organised person, problem solver, independent employee with high attention to detail.
          Fan of MMA, outdoor activities, TV series and, recently, English literature. A family
          person, father of two fractious boys, therefore remote employment is preferred.
        </Paragraph>
        <Paragraph>
          Interested in the entire frontend spectrum and working on ambitious projects with positive
          people.
        </Paragraph>
      </DescriptionContainer>
    </TextContainer>
    <ImagesContainer>
      <HexGridImages />
    </ImagesContainer>
  </AboutGrid>
);

export default About;
