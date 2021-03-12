import styled from 'styled-components';

export const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LandingPageImage = styled.img`
  position: absolute;
  width: 100%;
  filter: brightness(70%);
  z-index: -1;
`;

export const LandingPageTitle = styled.h1`
  color: white;
  font-family: 'avenir';
  font-size: 60px;
  margin-bottom: 15px;

  @media screen and (max-width: 1039px) {
    font-size: 45px;
  }

  @media screen and (max-width: 656px) {
    font-size: 30px;
  }

  @media screen and (max-width: 328px) {
    font-size: 20px;
  }
`;

export const TitleAndSearchContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  @media screen and (max-width: 656px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 328px) {
    margin-top: 20px;
  }
`;
