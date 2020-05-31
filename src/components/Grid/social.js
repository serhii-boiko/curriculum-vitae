import React from 'react';
import styled from 'styled-components';
import { media } from '@src/common/styles';
import Facebook from './svg/facebook.svg';
import Github from './svg/github.svg';
import LinkeDin from './svg/linkedin.svg';
import Resume from './svg/resume.svg';

const NavSocialWrapper = styled.ul`
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

const NavSocialItem = styled.li`
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
    <NavSocialItem>
      <Resume />
    </NavSocialItem>
  </NavSocialWrapper>
);

export default NavSocial;
