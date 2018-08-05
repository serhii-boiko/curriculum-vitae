import React from 'react';
import styled from 'styled-components';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import PropTypes from 'prop-types';
import NavSocial from '@src/grid/social';
import NavLogo from '@src/grid/logo';
import NavLinks from '@src/grid/links';

const MainContainer = styled.div`
  display: grid;
  grid-template-areas: 'header content';
  grid-template-columns: 60px max-content;
  grid-template-rows: auto;
  height: 100vh;
  min-height: 300px;
  min-width: 30px;
   
  ${StyleSheetHelper.media.desktop`
    grid-template-columns: auto;
    grid-template-rows: 60px max-content;
    grid-template-areas:
      'header'
      'content';
  `}
`;

const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #232323;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  
  ${StyleSheetHelper.media.desktop`
    flex-direction: row;
  `}
  
`;

const ContentContainer = styled.div`
  grid-area: content;
`;

const Grid = ({ children }) => (
  <MainContainer>
    <HeaderContainer>
      <Header>
        <NavLogo />
        <NavLinks />
        <NavSocial />
      </Header>
    </HeaderContainer>
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainContainer>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
