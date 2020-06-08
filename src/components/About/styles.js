import styled from 'styled-components';
import { media } from '@src/common/styles';

export const AboutGrid = styled.div`
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

  ${media.lessThan('phone')`
    margin-top: 65px;
  `};
`;

export const TextContainer = styled.div`
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

export const ImagesContainer = styled.div`
  grid-area: images;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

export const DescriptionContainer = styled.div`
  color: white;
  margin-top: 50px;
  font-size: 18px;
  font-family: 'Roboto', sans-serif;
`;

export const Paragraph = styled.div`
  margin-bottom: 15px;
`;
