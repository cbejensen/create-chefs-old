import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../App';
import Home from './HomeView';
import Registration from './RegistrationView.js'
import About from './AboutView.js'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/register' component={Registration} />
      <Route path='/about' component={About} />
    </Route>
  </Router>
)

export default routes;
