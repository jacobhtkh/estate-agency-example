import React from 'react';
import PropertySearch from '../../components/property-search/property-search.component';
import {
  LandingPageContainer,
  LandingPageImage,
  LandingPageTitle,
  TitleAndSearchContainer,
} from './landing-page.styles';

const LandingPage = (props) => {
  return (
    <LandingPageContainer>
      <LandingPageImage
        src={
          'https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_1280.jpg'
        }
      />
      <TitleAndSearchContainer>
        <LandingPageTitle>Find Your Dream Home</LandingPageTitle>
        <PropertySearch />
      </TitleAndSearchContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
