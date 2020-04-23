import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '@/pages/Main/index';
import SignIn from '@/pages/Auth/SignIn/index';
import SignUp from '@/pages/Auth/SignUp/index';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact="/" component={Main} />
      <Route path="/signin" component={SignIn} />
      <Route path="/" exact component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
