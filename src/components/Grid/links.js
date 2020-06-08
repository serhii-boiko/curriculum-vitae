import React from 'react';
import PropTypes from 'prop-types';
import HomeSVG from './svg/home.svg';
import ContactSVG from './svg/at.svg';
import MyWorkSVG from './svg/folders.svg';
import SkillsSVG from './svg/settings.svg';
import UserSVG from './svg/user.svg';
import CustomLink from './link';

import { NavLinksStyled } from './styles';

const NavLinks = ({ openedMenu }) => (
  <NavLinksStyled openedMenu={openedMenu}>
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

NavLinks.propTypes = {
  openedMenu: PropTypes.bool.isRequired,
};

export default NavLinks;
