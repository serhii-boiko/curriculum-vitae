import styled from 'styled-components';

export const stylesBackground = '#f8f8f8';
export const stylesForeground = '#08fdd8';
export const stylesOutline = '#dfdfdf';

export const List = styled.ol`
  list-style: none;
`;

export const BarWrapper = styled.div`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
`;

export const BarContainer = styled.div`
  position: relative;
  height: 100%;
  margin: 0 40px;
  overflow: hidden;
`;

export const EventLineContainer = styled.div`
  position: absolute;
  left: 0;
  top: 49px;
  height: 2px;
  width: ${({ totalWidth }) => `${totalWidth}px`};
  transform: ${({ X }) => `translate3d(${X}px, 0, 0)`};
`;

export const Line = styled.span`
  position: absolute;
  left: ${({ tLeft }) => `${tLeft}px`};
  top: 0;
  height: 100%;
  width: ${({ tWidth }) => `${tWidth}px`};
  transform-origin: left center;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const Arrow = styled.a`
  position: absolute;
  cursor: pointer;
  top: 50%;
  width: 3vmin;
  height: 3vmin;
  background: transparent;
  border-top: 0.2vmin solid white;
  border-right: 0.2vmin solid white;
  box-shadow: 0 0 0 lightgray;
  transition: all 200ms ease;
  ${({ type }) => `${type}: 20px`};
  transform: ${({ type }) =>
    `translate3d(0, -50%, 0) rotate(${
      {
        left: -135,
        right: 45,
      }[type]
    }deg)`};

  &:hover {
    border-color: ${stylesForeground};
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-40%, -60%) rotate(45deg);
    width: 200%;
    height: 200%;
  }
`;

export const DotBase = styled.span`
  position: absolute;
  bottom: -5px;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  transition: background-color 0.3s, border-color 0.3s;
  left: ${({ labelWidth }) => `${labelWidth / 2 - 6}px`};

  &:hover {
    background-color: ${stylesForeground};
    border: 2px solid ${stylesForeground};
  }
`;

export const DotPast = styled(DotBase)`
  background-color: ${stylesBackground};
  border: 2px solid ${stylesForeground};
`;

export const DotPresent = styled(DotBase)`
  background-color: ${stylesForeground};
  border: 2px solid ${stylesForeground};
`;

export const DotFuture = styled(DotBase)`
  background-color: ${stylesBackground};
  border: 2px solid ${stylesOutline}};
`;

export const LinkListItem = styled.li`
  font-family: 'Roboto', sans-serif;
  position: absolute;
  bottom: 0;
  text-align: center;
  padding-bottom: 15px;
  color: white;
  left: ${({ distanceFromOrigin, labelWidth }) => `${distanceFromOrigin - labelWidth / 2}px`};
  cursor: pointer;
  width: ${({ labelWidth }) => labelWidth};
`;
