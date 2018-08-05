import { css } from 'styled-components';

const sizes = {
  giant: 1200,
  desktop: 992,
  tablet: 768,
  phone: 576,
};

const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

const color = {
  Background: '#191919',
  Menu: '#1e1e1e',
  Font: '#e6e6e6',
  Main1: '#fe2cb5',
  Main2: '#5bf4fe',
  $color2: '#4b4b4b',
  $color3: '#373737',
};

export default {
  media,
  color,
};
