import React from 'react';
import styled from 'styled-components';
import { media } from '@src/common/styles';
import PropTypes from 'prop-types';
import NavSocial from '@src/components/Grid/social';
import NavLogo from '@src/components/Grid/logo';
import NavLinks from '@src/components/Grid/links';
import MobileMenu from '@src/components/Grid/mobile-menu';

const MainContainer = styled.div`
  display: grid;
  grid-template-areas: 'header content';
  grid-template-columns: 60px auto;
  grid-template-rows: auto;
  height: 100%;
  min-height: 300px;
  min-width: 30px;

  ${media.lessThan('desktop')`
    grid-template-columns: auto;
    grid-template-rows: 60px auto;
    grid-template-areas:
      'header'
      'content';
  `}
`;

const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #1b1b1b;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  ${media.lessThan('desktop')`
    flex-direction: row;
  `}
`;

const ContentContainer = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;
  overflow: hidden;
  position: relative;
`;

class Grid extends React.Component {
  constructor(props) {
    super(props);
    this.state = { openedMenu: false };
  }

  toggleMenu = () => {
    this.setState((prevState) => ({ openedMenu: !prevState.openedMenu }));
  };

  render() {
    const { children } = this.props;
    const { openedMenu } = this.state;
    return (
      <MainContainer>
        <HeaderContainer>
          <Header>
            <NavLogo letter="SB" />
            <NavLinks openedMenu={openedMenu} />
            <NavSocial />
            <MobileMenu toggleMenu={this.toggleMenu} />
          </Header>
        </HeaderContainer>
        <ContentContainer>{children}</ContentContainer>
      </MainContainer>
    );
  }
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
