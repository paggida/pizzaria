import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from '../pages/SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SignIn} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
