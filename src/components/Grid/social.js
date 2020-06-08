import React from 'react';
import Facebook from './svg/facebook.svg';
import Github from './svg/github.svg';
import LinkeDin from './svg/linkedin.svg';
import Resume from './svg/resume.svg';

import { NavSocialItem, NavSocialWrapper } from './styles';

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
