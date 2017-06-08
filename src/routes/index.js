import React from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import App from '../App';
import Home from './HomeView';
import CreateAccount from './CreateAccountView.js';
import CookClass from './CookClassView';
import CookClasses from './CookClassesView';
import ManageAccount from './ManageAccountView.js';
import ManageChild from './ManageChildView.js';
import SignIn from './SignInView.js';
import About from './AboutView.js';
import Admin from './AdminView.js';
import BlogHome from './BlogHomeView.js';
import BlogPost from './BlogPostView.js';

const handleUpdate = () => {
  window.scrollTo(0, 0);
};

const routes = (
  <Router onUpdate={handleUpdate} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/classes/:classId" component={CookClass} />
      <Route path="/classes" component={CookClasses} />
      <Route path="/my-account" component={ManageAccount} />
      <Route path="/children/:childId" component={ManageChild} />
      <Route path="/blog/:slug" component={BlogPost} />
      <Route path="/blog/p/:page" component={BlogHome} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
    </Route>
  </Router>
);

export default routes;
