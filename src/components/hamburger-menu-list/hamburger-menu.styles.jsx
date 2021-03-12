import styled, { css } from 'styled-components';

const HamburgerHiddenStyles = css`
  display: none;
`;

const HamburgerShownStyles = css`
  display: flex;
`;

const getHamburgerStatusStyles = ({ isOpen }) => {
  if (!isOpen) {
    return HamburgerHiddenStyles;
  }

  return HamburgerShownStyles;
};

export const HamburgerMenuContainer = styled.ul`
  ${getHamburgerStatusStyles}
  list-style: none;

  flex-flow: row nowrap;

  li {
    padding: 18px 2px;
    font-weight: bold;
    color: #fff;
  }
  flex-flow: column nowrap;
  background-color: grey;
  position: absolute;
  z-index: -1;
  margin-top: 0px;
  top: 0;
  right: 0;
  height: 100vh;
  width: 300px;
  padding-top: 3.5rem;
`;
