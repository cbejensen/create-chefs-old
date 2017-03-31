import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from '../App';
import Home from './HomeView';
import CreateAccount from './CreateAccountView.js';
import ManageAccount from './ManageAccountView.js';
import ManageChild from './ManageChildView.js';
import SignIn from './SignInView.js';
import Reg from './ClassesView.js';
import About from './AboutView.js';
import Admin from './AdminView.js';
import * as firebase from 'firebase';

const handleUpdate = () => {
  window.scrollTo(0, 0);
};

const routes = (
  <Router onUpdate={handleUpdate} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/my-account" component={ManageAccount} />
      <Route path="/my-account/children/:childId" component={ManageChild} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/register" component={Reg} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>
);

export default routes;
