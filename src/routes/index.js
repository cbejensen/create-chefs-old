import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../App';
import Home from './HomeView';

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/register' />
      <Route path='/about' />
    </Route>
  </Router>
)

export default routes;
