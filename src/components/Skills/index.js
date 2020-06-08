import React from 'react';
import { PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import TextAnimation from '@src/components/TextAnimation';
import CircularSkill from '@src/components/CircularSkill';

import {
  SkillGrid,
  TextContainer,
  Paragraph,
  DescriptionContainer,
  CirclesContainer,
} from './styles';

const Skills = () => {
  return (
    <SkillGrid>
      <TextContainer>
        <TextAnimation mainAnimation={ScaleTextShowAnimation} hoverAnimation={ScaleHoverAnimation}>
          <PageTitle>Skills</PageTitle>
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
      <CirclesContainer>
        <CircularSkill title="CSS" percentage={90} />
        <CircularSkill title="JS" percentage={80} />
        <CircularSkill title="Node" percentage={70} />
        <CircularSkill title="HTML" percentage={95} />
        <CircularSkill title="TS" percentage={80} />
        <CircularSkill title="OOP" percentage={70} />
        <CircularSkill title="REST" percentage={90} />
        <CircularSkill title="DB" percentage={60} />
      </CirclesContainer>
    </SkillGrid>
  );
};

export default Skills;
