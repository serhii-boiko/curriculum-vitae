import styled from 'styled-components';

export const HexGrid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  overflow: hidden;
  font-family: 'Raleway', sans-serif;
  font-size: 15px;
  list-style-type: none;

  padding-bottom: 4.4%;
`;

export const Hex = styled.li`
  position: relative;
  visibility: hidden;
  outline: 1px solid transparent;

  width: 20%;

  &::after {
    content: '';
    display: block;
    padding-bottom: 86.602%;
  }

  &:nth-child(9n + 1) {
    margin-left: 10%;
  }
`;

export const HexIn = styled.div`
  position: absolute;
  width: 96%;
  padding-bottom: 110.851%;
  margin: 0 2%;
  overflow: hidden;
  visibility: hidden;
  outline: 1px solid transparent;
  transform: rotate3d(0, 0, 1, -60deg) skewY(30deg);

  & * {
    position: absolute;
    visibility: visible;
    outline: 1px solid transparent;
  }
`;

export const HexLink = styled.a`
  opacity: 0.5;
  display: block;
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
  overflow: hidden;
  transform: skewY(-30deg) rotate3d(0, 0, 1, 60deg);
  transition: all 500ms linear;

  &:hover {
    opacity: 1;
  }
`;

export const Images = styled.img`
  left: -100%;
  right: -100%;
  width: auto;
  height: 100%;
  margin: 0 auto;
  z-index: 10;
  transform: rotate3d(0, 0, 0, 0deg);
`;
