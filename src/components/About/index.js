import React from 'react';
import { PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import {
  AboutGrid,
  TextContainer,
  DescriptionContainer,
  ImagesContainer,
  Paragraph,
} from './styles';
import TextAnimation from '@src/components/TextAnimation';
import HexGridImages from '@src/components/HexGridImages';

const About = () => (
  <AboutGrid>
    <TextContainer>
      <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
        <PageTitle>About me</PageTitle>
      </TextAnimation>
      <DescriptionContainer>
        <Paragraph>
          Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla.
        </Paragraph>
        <Paragraph>
          Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla.
        </Paragraph>
        <Paragraph>
          Bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
          bla bla bla bla bla bla bla bla bla bla bla bla. Bla bla bla bla bla bla bla.
        </Paragraph>
      </DescriptionContainer>
    </TextContainer>
    <ImagesContainer>
      <HexGridImages />
    </ImagesContainer>
  </AboutGrid>
);

export default About;
