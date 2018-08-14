import React from 'react';
import styled from 'styled-components';
import StyleSheetHelper from '@src/common/StyleSheetHelper';
import Facebook from './svg/facebook.svg';
import Github from './svg/github.svg';
import LinkeDin from './svg/linkedin.svg';

const NavSocialWrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display : flex;
  flex-direction: column;
  align-items: center;
  
  ${StyleSheetHelper.media.desktop`
    flex-direction: row;
  `}
  
  ${StyleSheetHelper.media.phone`
    display: none;
  `}
`;

const NavSocialItem = styled.li`
  padding-bottom: 15px;
  padding-right: 0;
  
  & svg {
    fill: #0a0a0a;
    height: 15px;
  }
  
  ${StyleSheetHelper.media.desktop`
    padding-bottom: 0;
    padding-right: 15px;
  `}
  
  & svg:hover {
    fill: #5bf4fe;
  }
`;

const NavSocial = () => (
  <NavSocialWrapper>
    <NavSocialItem>
      <Facebook />
    </NavSocialItem>
    <NavSocialItem>
      <LinkeDin />
    </NavSocialItem>
    <NavSocialItem>
      <Github />
    </NavSocialItem>
  </NavSocialWrapper>
);

export default NavSocial;
