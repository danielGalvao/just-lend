import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router';

import Home from '../templates/Home';
import Objects from '../templates/Objects';
import AddObjects from '../templates/addObjects';

export default props => (
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/lend" component={Objects} />
    <Route path='/add' component={AddObjects} />
    <Redirect from='*' to='/' />
  </Router>
);
