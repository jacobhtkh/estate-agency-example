import React from 'react';
import {
  LandingPageContainer,
  LandingPageImageContainer,
  LandingPageImage,
} from './landing-page.styles';

const LandingPage = (props) => {
  return (
    <LandingPageContainer>
      <LandingPageImageContainer>
        <LandingPageImage
          src={
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60'
          }
        />
      </LandingPageImageContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
