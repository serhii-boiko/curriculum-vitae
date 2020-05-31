import styled, { keyframes, css } from 'styled-components';

const pageOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }

  to {
    transform: scale(0.9);
    opacity: 0.4;
  }
`;

const pageIn = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0.4;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Page = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  animation-iteration-count: 1;
  animation-duration: 0.2s;
  animation-fill-mode: forwards;
  animation-name: ${({ step }) => {
    if (step === 'ONE') {
      return css`
        ${pageOut}
      `;
    }

    if (step === 'TWO') {
      return css`
        ${pageIn}
      `;
    }

    return '';
  }};
`;

function animation(props) {
  return keyframes`
      0% {
        transform: ${{ LEFT: 'translate(-110%);', RIGHT: 'translate(110%)' }[props.from]};
      }
      
      30% {
        transform: translate(0);
      }
      
      70% {
        transform: translate(0);
      }
      
      100% {
        transform: ${{ LEFT: 'translate(-110%);', RIGHT: 'translate(110%)' }[props.to]};
      }
  `;
}

export const LoadingAnimation = styled.div`
  animation-name: ${animation};
  animation-iteration-count: 1;
  animation-duration: 2s;
  height: 100%;
`;

export const AnimationWrapper = styled.div`
  height: 100%;
`;
