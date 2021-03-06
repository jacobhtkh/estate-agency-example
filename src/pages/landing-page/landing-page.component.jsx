import React from 'react';
import {
  LandingPageContainer,
  LandingPageImageContainer,
} from './landing-page.styles';

import { ReactComponent as LandingPageImage } from '../../assets/undraw_select_house.svg';

const LandingPage = (props) => {
  return (
    <LandingPageContainer>
      <LandingPageImageContainer>
        <LandingPageImage />
      </LandingPageImageContainer>
    </LandingPageContainer>
  );
};

export default LandingPage;
