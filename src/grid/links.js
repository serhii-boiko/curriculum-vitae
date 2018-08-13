import React from 'react';
import styled from 'styled-components';
import HomeSVG from './linksSVG/home.svg';
import ContactSVG from './linksSVG/at.svg';
import MyWorkSVG from './linksSVG/folders.svg';
import SkillsSVG from './linksSVG/settings.svg';
import UserSVG from './linksSVG/user.svg';
import CustomLink from './link';

const NavLinksStyled = styled.main`
  padding: 0;
  margin: 0;
`;

const NavLinks = () => (
  <NavLinksStyled>
    <CustomLink to="/" text="HOME" exact>
      <HomeSVG />
    </CustomLink>
    <CustomLink to="/about" text="ABOUT">
      <UserSVG />
    </CustomLink>
    <CustomLink to="/skills" text="SKILLS">
      <SkillsSVG />
    </CustomLink>
    <CustomLink to="/my-work" text="MY&nbsp;WORK">
      <MyWorkSVG />
    </CustomLink>
    <CustomLink to="/contact" text="CONTACT">
      <ContactSVG />
    </CustomLink>
  </NavLinksStyled>
);

export default NavLinks;
