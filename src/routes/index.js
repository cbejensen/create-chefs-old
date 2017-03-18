import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../App';
import Home from './HomeView';
import Registration from './RegistrationView.js'
import RegConfirmation from './RegConfirmationView';
import About from './AboutView.js'
import Admin from './AdminView.js'

const handleUpdate = () => {
  window.scrollTo(0, 0)
}

const routes = (
  <Router onUpdate={handleUpdate} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/register' component={Registration} />
      <Route path='/register/confirmation' component={RegConfirmation} />
      <Route path='/about' component={About} />
      <Route path='/admin' component={Admin} />
    </Route>
  </Router>
)

export default routes;
