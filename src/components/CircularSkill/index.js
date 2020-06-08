import React from 'react';
import {
  Percent,
  Card,
  SVGContainer,
  Box,
  TextContainer,
  Circle1,
  Circle2,
  Number,
} from './styles';
import PropTypes from 'prop-types';

const CircularSkill = ({ title, percentage }) => (
  <Card>
    <Box>
      <Percent>
        <SVGContainer>
          <Circle1 cx="70" cy="70" r="70"></Circle1>
          <Circle2 cx="70" cy="70" r="70" percentage={percentage}></Circle2>
        </SVGContainer>
        <Number>
          <TextContainer>{title}</TextContainer>
        </Number>
      </Percent>
    </Box>
  </Card>
);

CircularSkill.propTypes = {
  title: PropTypes.string,
  percentage: PropTypes.string,
};

export default CircularSkill;
