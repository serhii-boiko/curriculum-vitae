import React from 'react';
import PropTypes from 'prop-types';

import { NavLinkStyled, StyledLink, LinkText } from './styles';

const CustomLink = ({ children, text, ...props }) => (
  <NavLinkStyled>
    <StyledLink {...props}>
      {children}
      <LinkText>
        <span>{text}</span>
      </LinkText>
    </StyledLink>
  </NavLinkStyled>
);

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLink;
