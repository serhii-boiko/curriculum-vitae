import React, { useState } from 'react';
import { AnimatedInputContainer, InputSpanAnimation } from './styles';
import PropTypes from 'prop-types';

const AnimatedInput = ({ Component, containerStyles, ...props }) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <AnimatedInputContainer styles={containerStyles}>
      <Component
        {...props}
        onFocus={(e) => {
          const { onFocus } = props;
          if (onFocus) {
            onFocus(e);
          }

          setIsFocus(true);
        }}
        onBlur={(e) => {
          const { onBlur } = props;
          if (onBlur) {
            onBlur(e);
          }

          setIsFocus(false);
        }}
      />
      <InputSpanAnimation isFocus={isFocus} />
    </AnimatedInputContainer>
  );
};

AnimatedInput.propTypes = {
  Component: PropTypes.func,
  containerStyles: PropTypes.object,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
};

export default AnimatedInput;
