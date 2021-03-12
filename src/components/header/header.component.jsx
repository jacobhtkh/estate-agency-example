import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

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
} from './header.styles';

const Header = (props) => {
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
    </HeaderContainer>
  );
};

export default Header;
