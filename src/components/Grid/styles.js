import styled from 'styled-components';
import { media, glitchEffect } from '@src/common/styles';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
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

export const HeaderContainer = styled.div`
  grid-area: header;
  background-color: #1b1b1b;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  ${media.lessThan('desktop')`
    flex-direction: row;
  `}
`;

export const ContentContainer = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;
  overflow: auto;
  position: relative;
`;

export const NavLinkStyled = styled.nav`
  display: inline-block;
  width: 30px;
  height: 30px;
  padding: 15px;
  position: relative;

  ${media.lessThan('desktop')`
    padding: 15px;
  `}
`;

export const LinkText = styled.span`
  opacity: 0;
  width: 60px;
  height: 60px;
  left: 0;
  top: 0;
  position: absolute;
  font-size: 11px;
  font-weight: normal;
  font-family: 'Roboto', sans-serif;

  &:hover {
    opacity: 1;
    color: #08fdd8;
    transition: all 0.2s ease-out;
  }

  & span {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
`;

export const StyledLink = styled(NavLink)`
  fill: #666666;

  &.active path {
    fill: #08fdd8;
  }

  &:hover path {
    opacity: 0;
    fill: #08fdd8;
    transition: all 0.2s ease-out;
  }
`;

export const NavLinksStyled = styled.main`
  padding: 0;
  margin: 0;
  z-index: 100;

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

export const NavLogoWrapper = styled.div`
  width: 60px;
  height: 60px;
  background-color: #000000;
  text-align: center;
  position: relative;
  line-height: 60px;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-family: Sedgwick Ave, cursive;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-transform: uppercase;
  text-align: center;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  &::before {
    color: #ff00c1;
    animation: ${glitchEffect} 3s infinite;
  }

  &::after {
    color: #3498db;
    animation: ${glitchEffect} 2s infinite;
  }
`;

export const MobileMenuWrapper = styled.div`
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

  ${media.lessThan('phone')`
    display: block;
  `}
`;

export const NavSocialWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${media.lessThan('desktop')`
    flex-direction: row;
  `}

  ${media.lessThan('phone')`
    display: none;
  `}
`;

export const NavSocialItem = styled.li`
  padding-bottom: 15px;
  padding-right: 0;

  & svg {
    fill: #666666;
    height: 15px;
  }

  ${media.lessThan('desktop')`
    padding-bottom: 0;
    padding-right: 15px;
  `}

  & svg:hover {
    fill: #5bf4fe;
  }
`;
