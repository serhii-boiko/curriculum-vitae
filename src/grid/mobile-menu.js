import React from 'react';
import styled from 'styled-components';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import PropTypes from 'prop-types';
import Menu from './svg/line-menu.svg';

const MobileMenuWrapper = styled.div`
  width: 60px;
  height: 60px;
  text-align: center;
  line-height: 60px;
  display: none;
  
  & svg {
    width: 30px;
    height: 30px;
    padding: 15px;
    fill: aliceblue;
    cursor: pointer;
  }
  
  & path {
    fill: aliceblue;
  }
  
  ${StyleSheetHelper.media.phone`
    display: block;
  `}
`;

const MobileMenu = ({ toggleMenu }) => (
  <MobileMenuWrapper>
    <Menu onClick={toggleMenu} />
  </MobileMenuWrapper>
);


MobileMenu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};

export default MobileMenu;
