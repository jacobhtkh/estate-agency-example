import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ResponsiveOptionsAndLogo = css`
  @media screen and (max-width: 1116px) {
    font-size: 16px;
  }
`;

const HamburgerMenuAppears = css`
  @media screen and (max-width: 800px) {
    display: none;
  }
`;

const HamburgerHiddenStyles = css`
  display: none;
`;

const HamburgerShownStyles = css`
  display: flex;
`;

const HamburgerHiddenColorChange = css`
  color: black;
`;

const HamburgerShownColorChange = css`
  color: white;
`;

const getHamburgerStatusStyles = ({ isOpen }) => {
  if (!isOpen) {
    return HamburgerHiddenStyles;
  }

  return HamburgerShownStyles;
};

const getHamburgerColorChangeStyles = ({ isOpen }) => {
  if (!isOpen) {
    return HamburgerHiddenColorChange;
  }

  return HamburgerShownColorChange;
};

export const HeaderContainer = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  position: sticky;
`;

export const LogoAndAgencyContainer = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  align-items: center;
  padding: 25px;
`;

export const LogoLink = styled(Link)`
  height: 25px;
  width: 25px;

  @media screen and (max-width: 1116px) {
    height: 20px;
    width: 20px;
  }
`;

export const AgencyLink = styled(Link)`
  font-family: 'avenir';
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  position: relative;
  top: 3px;
  text-decoration: none;
  :visited {
    color: black;
  }

  ${ResponsiveOptionsAndLogo}

  @media screen and (max-width: 1010px) {
    display: none;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;

  ${HamburgerMenuAppears}
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  position: relative;
  text-decoration: none;
  font-family: 'avenir';
  font-size: 18px;
  margin-right: 30px;
  top: 3px;
  cursor: pointer;
  :visited {
    color: black;
  }
  :hover {
    color: grey;
  }

  ${ResponsiveOptionsAndLogo}
`;

export const LoginContainer = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 25px;

  ${HamburgerMenuAppears}
`;

export const LoginLink = styled(Link)`
  padding: 10px 15px;
  position: relative;
  text-decoration: none;
  font-family: 'avenir';
  font-size: 16px;
  top: 3px;
  cursor: pointer;
  :visited {
    color: black;
  }
  background-color: white;
  color: black;
  border: 1px solid black;
  border-radius: 10px;
  :hover {
    border: 1px solid grey;
    color: grey;
  }
`;

export const UserIcon = styled.span`
  margin-right: 5px;
  position: relative;
  bottom: 1px;

  @media screen and (max-width: 1039px) {
    font-size: 14px;
  }

  @media screen and (max-width: 356px) {
    display: none;
  }
`;

export const LoginText = styled.span`
  @media screen and (max-width: 1039px) {
    font-size: 14px;
  }
  @media screen and (max-width: 356px) {
    font-size: 12px;
  }
`;

export const HamburgerMenuIconContainer = styled.div`
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  margin-top: 2px;
  padding: 25px;
  display: none;

  @media screen and (max-width: 800px) {
    display: flex;
  }
`;

export const HamburgerMenuIcon = styled.span`
  ${getHamburgerColorChangeStyles}
  :hover {
    cursor: pointer;
  }
`;

export const HamburgerMenuListContainer = styled.div`
  ${getHamburgerStatusStyles}
  height: 100%;
`;
