import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NavSocial from '@src/components/Grid/social';
import NavLogo from '@src/components/Grid/logo';
import NavLinks from '@src/components/Grid/links';
import MobileMenu from '@src/components/Grid/mobile-menu';

import { MainContainer, HeaderContainer, Header, ContentContainer } from './styles';

const Grid = ({ children }) => {
  const [openedMenu, setOpenedMenu] = useState(false);

  return (
    <MainContainer>
      <HeaderContainer>
        <Header>
          <NavLogo letter="SB" />
          <NavLinks openedMenu={openedMenu} />
          <NavSocial />
          <MobileMenu toggleMenu={() => setOpenedMenu(!openedMenu)} />
        </Header>
      </HeaderContainer>
      <ContentContainer>{children}</ContentContainer>
    </MainContainer>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
