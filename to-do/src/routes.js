import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainView from './components/MainView/MainView';
import DetailedView from './components/DetailedView/DetailedView';

export default (
  <Switch>
    <Route exact path='/' component={ MainView }/>
    <Route path='/details/:id' component={ DetailedView }/>
  </Switch>
);