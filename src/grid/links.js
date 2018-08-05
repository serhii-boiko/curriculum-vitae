import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavLinksWrapper = styled.div`
`;

const NavLinks = () => (
  <NavLinksWrapper>
    <Link to="/">
      1
    </Link>
    <Link to="/contact">
      2
    </Link>
    <Link to="/my-work">
      3
    </Link>
    <Link to="/skills">
      4
    </Link>
    <Link to="/about">
      5
    </Link>
  </NavLinksWrapper>
);

export default NavLinks;
