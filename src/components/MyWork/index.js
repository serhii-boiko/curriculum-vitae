import React, { useState } from 'react';
import Experiences from './content';
import TimeLine from '@src/components/TimeLine';
import SwipeableViews from 'react-swipeable-views';
import TextAnimation from '@src/components/TextAnimation';
import { PageTitle, ScaleHoverAnimation, ScaleTextShowAnimation } from '@src/common/styles';
import ReligionPeace from './../../images/religionPeace.png';

import {
  ExperienceContainer,
  TimeLineContainer,
  TextContainer,
  ImageContainer,
  TitleContainer,
  ContentContainer,
  ProjectImage,
} from './styles';

const data = Experiences.map((experience, index) => {
  return {
    date: experience.date,
    component: (
      <ExperienceContainer key={index}>
        <TextContainer>
          <p>{experience.content}</p>
        </TextContainer>
        <ImageContainer>
          <ProjectImage src={ReligionPeace} />
        </ImageContainer>
      </ExperienceContainer>
    ),
  };
});

const dates = Experiences.map((entry) => entry.date);

const config = {
  minEventPadding: 20,
  maxEventPadding: 120,
  linePadding: 100,
  labelWidth: 100,
  fillingMotionStiffness: 150,
  fillingMotionDamping: 25,
  slidingMotionStiffness: 150,
  slidingMotionDamping: 25,
  isTouchEnabled: true,
  isKeyboardEnabled: true,
  isOpenEnding: true,
  isOpenBeginning: true,
};

const Experience = () => {
  const [state, setState] = useState({
    value: 0,
    previous: 0,
  });

  const views = data.map((entry, index) => {
    return <div key={index}>{entry.component}</div>;
  });

  return (
    <div style={{ height: '100%' }}>
      <TimeLineContainer>
        <TimeLine
          fillingMotion={{
            stiffness: config.fillingMotionStiffness,
            damping: config.fillingMotionDamping,
          }}
          index={state.value}
          indexClick={(index) => setState({ value: index, previous: state.value })}
          isKeyboardEnabled={config.isKeyboardEnabled}
          isTouchEnabled={config.isTouchEnabled}
          labelWidth={config.labelWidth}
          linePadding={config.linePadding}
          maxEventPadding={config.maxEventPadding}
          minEventPadding={config.minEventPadding}
          slidingMotion={{
            stiffness: config.slidingMotionStiffness,
            damping: config.slidingMotionDamping,
          }}
          values={dates}
          isOpenEnding={state.isOpenEnding}
          isOpenBeginning={state.isOpenBeginning}
        />
      </TimeLineContainer>
      <ContentContainer>
        <TitleContainer>
          <TextAnimation
            mainAnimation={ScaleTextShowAnimation}
            hoverAnimation={ScaleHoverAnimation}
          >
            <PageTitle>My work</PageTitle>
          </TextAnimation>
        </TitleContainer>
        <SwipeableViews
          index={state.value}
          onChangeIndex={(value, previous) => setState({ value: value, previous: previous })}
          resistance
        >
          {views}
        </SwipeableViews>
      </ContentContainer>
    </div>
  );
};

export default Experience;
