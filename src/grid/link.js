import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import PropTypes from 'prop-types';

const NavLinkStyled = styled.nav`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 15px;
  position: relative;
  
  ${StyleSheetHelper.media.desktop`
    padding: 15px;
  `}
`;

const LinkText = styled.span`
    opacity: 0;
    width: 60px;
    height: 60px;
    left: 0;
    top: 0;
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    
    &:hover {
      opacity: 1;
      color: #08fdd8;
      transition: all 0.2s ease-out;
  }
  
  & span {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
`;

const StyledLink = styled(NavLink)`
  &.active path {
    fill: #08fdd8;
  }
  
  &:hover path {
    opacity: 0;
    fill: #08fdd8;
    transition: all 0.2s ease-out;
  }
`;


const CustomLink = ({ children, text, ...props }) => (
  <NavLinkStyled>
    <StyledLink {...props}>
      {children}
      <LinkText>
        <span>
          {text}
        </span>
      </LinkText>
    </StyledLink>
  </NavLinkStyled>
);

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};

export default CustomLink;
