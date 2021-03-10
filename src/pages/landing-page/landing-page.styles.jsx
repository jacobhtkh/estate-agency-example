import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

export const LandingPageImage = styled.img`
  position: absolute;
  width: 100%;
  filter: brightness(75%);
  z-index: -1;
`;

export const LandingPageTitle = styled.h1`
  color: white;
  top: 150px;
  font-family: 'avenir';
  font-size: 60px;
  position: absolute;
  z-index: 1;
`;
