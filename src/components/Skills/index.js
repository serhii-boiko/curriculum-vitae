import React from 'react';
import styled from 'styled-components';
import { media, PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import TextAnimation from '@src/components/TextAnimation';
import CircularProgressbar from '@src/components/CircularProgressbar';
import ProgressProvider from '@src/components/CircularProgressbar/ProgressProvider';

const SkillGrid = styled.div`
  display: grid;
  grid-template-areas: 'text circles';
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
      'circles';
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

const CirclesContainer = styled.div`
  grid-area: circles;
  display: flex;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
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

const styles = { root: { height: '150px', width: '150px', margin: '15px' } };

const Skills = () => {
  return (
    <SkillGrid>
      <TextContainer>
        <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
          <PageTitle>Skills</PageTitle>
        </TextAnimation>
        <DescriptionContainer>
          <Paragraph>
            The main area of my expertise is front end development (client side of the web).
          </Paragraph>
          <Paragraph>
            HTML, CSS, JS (TypeScript), building small and medium web apps with Angular 2+, custom
            plugins, features, animations, and coding interactive layouts.
          </Paragraph>
          <Paragraph>
            I have also full-stack developer experience with open source CMS like (WordPress,
            Drupal, Magento, Keystone.js and other)
          </Paragraph>
        </DescriptionContainer>
      </TextContainer>
      <CirclesContainer>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
        <ProgressProvider valueStart={0} valueEnd={50}>
          {(value) => <CircularProgressbar value={value} text={`${value}`} styles={styles} />}
        </ProgressProvider>
      </CirclesContainer>
    </SkillGrid>
  );
};

export default Skills;
