import React from 'react';
import {
  LandingPageContainer,
  LandingPageImageContainer,
  LandingPageImage,
  LandingPageTitle,
} from './landing-page.styles';

const LandingPage = (props) => {
  return (
    <LandingPageContainer>
      <LandingPageImageContainer>
        <LandingPageImage
          src={
            'https://images.unsplash.com/photo-1575386848021-028a496c03fe?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
          }
        />
      </LandingPageImageContainer>
      <LandingPageTitle>Find Your Dream Home</LandingPageTitle>
    </LandingPageContainer>
  );
};

export default LandingPage;
