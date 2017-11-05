import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import App from '../App';
import Home from './HomeView';
import CreateAccount from './CreateAccountView';
import CookClasses from './CookClassesView';
import ManageAccount from './ManageAccountView';
import ManageChild from './ManageChildView';
import SignIn from './SignInView';
import About from './AboutView';
import Admin from './AdminView';
import AdminClassEdit from './AdminClassEditView';
import AdminGroupEdit from './AdminGroupEditView';
import AdminChild from './AdminChildView';
import Gallery from './GalleryView';

const handleUpdate = () => {
  window.scrollTo(0, 0);
};

const routes = (
  <Router onUpdate={handleUpdate} history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/sign-in" component={SignIn} />
      <Route path="/create-account" component={CreateAccount} />
      <Route path="/classes" component={CookClasses} />
      <Route path="/my-account" component={ManageAccount} />
      <Route path="/children/:childId" component={ManageChild} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/about" component={About} />
      <Route path="/admin" component={Admin} />
      <Route path="/admin/classes/:id" component={AdminClassEdit} />
      <Route path="/admin/class-groups/:id" component={AdminGroupEdit} />
      <Route path="/admin/children/:id" component={AdminChild} />
    </Route>
  </Router>
);

export default routes;
