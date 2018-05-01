import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import AuthOrApp from './authOrApp';
import Objects from '../templates/Objects';
import AddObjects from '../templates/AddObjects';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={AuthOrApp} />
    <Route path="/lend" component={Objects} />
    <Route path='/add' component={AddObjects} />
    <Redirect from='*' to='/' />
  </Router>
);
