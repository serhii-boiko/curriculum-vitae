import React from 'react';
import styled from 'styled-components';
import { media } from '@src/common/styles';
import PropTypes from 'prop-types';
import HomeSVG from './svg/home.svg';
import ContactSVG from './svg/at.svg';
import MyWorkSVG from './svg/folders.svg';
import SkillsSVG from './svg/settings.svg';
import UserSVG from './svg/user.svg';
import CustomLink from './link';

const NavLinksStyled = styled.main`
  padding: 0;
  margin: 0;

  ${media.lessThan('phone')`
    display: ${(props) => (props.openedMenu ? 'block' : 'none')};
    text-align: center;
    background-color: #232323;
    position: fixed;
    left: 100%;
    width: 100%;
    top: 60px;
    left: 0;
  `}
`;

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
