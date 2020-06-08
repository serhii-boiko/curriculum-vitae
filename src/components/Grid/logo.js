import React from 'react';
import { NavLogoWrapper, Logo } from './styles';
import PropTypes from 'prop-types';

const NavLogo = ({ letter }) => (
  <NavLogoWrapper>
    <Logo data-text={letter}>{letter}</Logo>
  </NavLogoWrapper>
);

NavLogo.propTypes = {
  letter: PropTypes.string.isRequired,
};

export default NavLogo;
