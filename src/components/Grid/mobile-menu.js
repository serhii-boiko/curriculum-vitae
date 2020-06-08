import React from 'react';
import PropTypes from 'prop-types';
import Menu from './svg/line-menu.svg';

import { MobileMenuWrapper } from './styles';

const MobileMenu = ({ toggleMenu }) => (
  <MobileMenuWrapper>
    <Menu onClick={toggleMenu} />
  </MobileMenuWrapper>
);

MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
