import styled, { css } from 'styled-components';
import { media } from '@src/common/styles';

const TextMedia = css`
  ${media.lessThan('desktop')`
    margin-left: 50px;
    margin-right: 50px;
  `}
  
  ${media.lessThan('tablet')`
    margin-left: 30px;
    margin-right: 30px;
  `}
  
   ${media.lessThan('phone')`
    margin-left: 20px;
    margin-right: 20px;
  `}
`;

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-areas: 'text image';
  grid-template-columns: 70% 30%;
  grid-template-rows: auto;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;

  ${TextMedia}

  ${media.lessThan('desktop')`
    grid-row-gap: 50px;
    grid-template-columns: auto;
    grid-template-rows: max-content auto;
    grid-template-areas:
      'text'
      'image';
  `}
`;

export const TimeLineContainer = styled.div`
  grid-area: line;
  width: 60%;
  height: 100px;
  margin: 0 auto;
  padding-top: 100px;
  
  ${media.lessThan('giant')`
     width: 70%;
  `}
  
  ${media.lessThan('desktop')`
     width: 70%;
     padding-top: 50px;
     padding-bottom: 50px;
  `}
  
  ${media.lessThan('tablet')`
     width: 80%;
     padding-top: 60px;
     padding-bottom: 30px;
  `}
    
  ${media.lessThan('phone')`
    width: 90%;
  `}
`;

export const TitleContainer = styled.div`
  margin-left: 100px;
  margin-right: 100px;
  ${TextMedia}
`;

export const TextContainer = styled.div`
  grid-area: text;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
`;

export const ImageContainer = styled.div`
  grid-area: image;
  display: flex;
`;

export const ContentContainer = styled.div``;

export const ProjectImage = styled.img`
  margin: auto;
`;
