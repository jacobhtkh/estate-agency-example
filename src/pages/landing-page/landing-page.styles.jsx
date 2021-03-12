import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingPageImage = styled.img`
  position: absolute;
  width: 100%;
  filter: brightness(90%);
  z-index: -1;
`;

export const LandingPageTitle = styled.h1`
  color: white;
  font-family: 'avenir';
  font-size: 60px;
  margin-bottom: 15px;
`;

export const TitleAndSearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;
