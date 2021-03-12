import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HamburgerMenuList from '../hamburger-menu-list/hamburger-menu.component';

import { ReactComponent as Logo } from '../../assets/house-icon.svg';
import {
  HeaderContainer,
  LogoAndAgencyContainer,
  LogoLink,
  AgencyLink,
  OptionsContainer,
  OptionLink,
  LoginContainer,
  LoginLink,
  UserIcon,
  LoginText,
  HamburgerMenuIconContainer,
  HamburgerMenuIcon,
  HamburgerMenuListContainer,
} from './header.styles';

const Header = (props) => {
  const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);

  return (
    <HeaderContainer>
      <LogoAndAgencyContainer>
        <LogoLink to='/'>
          <Logo />
        </LogoLink>
        <AgencyLink to='/'>REAL ESTATE AGENCY</AgencyLink>
      </LogoAndAgencyContainer>
      <OptionsContainer>
        <OptionLink to='/'>Buy</OptionLink>
        <OptionLink to='/'>Sell</OptionLink>
        <OptionLink to='/'>Rent</OptionLink>
        <OptionLink to='/'>About</OptionLink>
        <OptionLink to='/'>Contact</OptionLink>
      </OptionsContainer>
      <LoginContainer>
        <LoginLink to='/'>
          <UserIcon>
            <FontAwesomeIcon icon={faUser} size='sm' />
          </UserIcon>
          <LoginText>Login</LoginText>
        </LoginLink>
      </LoginContainer>
      <HamburgerMenuListContainer isOpen={hamburgerIsOpen}>
        <HamburgerMenuList isOpen={hamburgerIsOpen} />
      </HamburgerMenuListContainer>
      <HamburgerMenuIconContainer>
        <HamburgerMenuIcon
          isOpen={hamburgerIsOpen}
          onClick={() => setHamburgerIsOpen(!hamburgerIsOpen)}
        >
          <FontAwesomeIcon icon={faBars} size='lg' />
        </HamburgerMenuIcon>
      </HamburgerMenuIconContainer>
    </HeaderContainer>
  );
};

export default Header;
