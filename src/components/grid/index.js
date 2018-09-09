import React from 'react';
import styled from 'styled-components';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import PropTypes from 'prop-types';
import NavSocial from '@src/components/grid/social';
import NavLogo from '@src/components/grid/logo';
import NavLinks from '@src/components/grid/links';
import MobileMenu from '@src/components/grid/mobile-menu';

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

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedMenu: false };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ openedMenu: !prevState.openedMenu }));
  };

  render() {
    const { children } = this.props;
    const { openedMenu } = this.state;
    return (
      <MainContainer>
        <HeaderContainer>
          <Header>
            <NavLogo />
            <NavLinks openedMenu={openedMenu} />
            <NavSocial />
            <MobileMenu toggleMenu={this.toggleMenu} />
          </Header>
        </HeaderContainer>
        <ContentContainer>
          {children}
        </ContentContainer>
      </MainContainer>
    );
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;