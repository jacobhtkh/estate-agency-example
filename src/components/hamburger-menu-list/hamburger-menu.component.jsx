import React from 'react';
import { HamburgerMenuContainer } from './hamburger-menu.styles';

const HamburgerMenuList = (props) => {
  const { isOpen } = props;

  return (
    <HamburgerMenuContainer isOpen={isOpen}>
      <li>Buy</li>
      <li>Sell</li>
      <li>Rent</li>
      <li>About</li>
      <li>Contact</li>
      <li>Login</li>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenuList;
