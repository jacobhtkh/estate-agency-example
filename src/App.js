import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/header/header.component';

import Spinner from './components/spinner/spinner.component';

const LandingPage = lazy(() =>
  import('./pages/landing-page/landing-page.component')
);

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Route exact path='/' component={LandingPage} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
