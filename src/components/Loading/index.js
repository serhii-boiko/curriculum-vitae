import React from 'react';
import {
  Preload,
  PreloadInner,
  Logo,
  LogoAnimation,
  LogoSText,
  PreloadSpan,
  ProgressBar,
  ProgressBarBg,
  ProgressBarBgDone,
} from './styles';

const Loading = () => (
  <Preload>
    <PreloadInner>
      <Logo>
        <LogoAnimation data-text="SB">SB</LogoAnimation>
        <LogoSText>SerhiiBoiko</LogoSText>
      </Logo>
      <PreloadSpan>Thinking...</PreloadSpan>
      <ProgressBar>
        <ProgressBarBg>
          <ProgressBarBgDone />
        </ProgressBarBg>
      </ProgressBar>
    </PreloadInner>
  </Preload>
);

export default Loading;
