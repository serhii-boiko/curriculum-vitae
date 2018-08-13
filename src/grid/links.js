import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import HomeSVG from './linksSVG/home.svg';
import ContactSVG from './linksSVG/at.svg';
import MyWorkSVG from './linksSVG/folders.svg';
import SkillsSVG from './linksSVG/settings.svg';
import UserSVG from './linksSVG/user.svg';

const NavLinksStyled = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const NavLinkStyled = styled.li`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 20px 15px;
  
  ${StyleSheetHelper.media.desktop`
    padding: 15px 20px;
  `}
`;


const StyledLink = styled(Link)` 
  &:after {
 
    content: "Test";
  }
  
  &:hover path {
    fill: #08fdd8;
    transition: all 0.3s ease-out;
  }
  
  &:hover:after {
    opacity: 1;
  }
`;

const NavLinks = () => (
  <NavLinksStyled>
    <NavLinkStyled>
      <StyledLink to="/">
        <HomeSVG />
      </StyledLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <StyledLink to="/about">
        <UserSVG />
      </StyledLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <StyledLink to="/skills">
        <SkillsSVG />
      </StyledLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <StyledLink to="/my-work">
        <MyWorkSVG />
      </StyledLink>
    </NavLinkStyled>
    <NavLinkStyled>
      <StyledLink to="/contact">
        <ContactSVG />
      </StyledLink>
    </NavLinkStyled>
  </NavLinksStyled>
);

export default NavLinks;
