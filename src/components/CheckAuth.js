import React from 'react';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class CheckAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = { uid: null };
  }
  componentDidMount() {
    this.removeAuthListener = firebase
      .auth()
      .onAuthStateChanged(user => {
        if (user) {
          // pass user ID to children
          this.setState({ uid: user.uid });
        } else if (!this.props.redirect) {
          // pass false to children
          this.setState({ uid: false });
        } else {
          // if redirect is string path, go there
          // otherwise redirect to sign-in page
          const path = typeof this.props.redirect ===
            'string'
            ? this.props.redirect
            : '/sign-in';
          browserHistory.push(path);
        }
      });
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }
  render() {
    if (this.state.uid === null) {
      return null;
    } else if (
      this.props.adminOnly &&
      this.state.uid !== 'tDHYraX5Iqes7WDq4Ne474qk30n1' &&
      this.state.uid !== '8KRkYoGQnTTBbMbl0PYRdneUbqO2' &&
      this.state.uid !== 'naTnIcQXtSY3KX8Zr0pbllIh7772'
    ) {
      const path = typeof this.props.redirect === 'string'
        ? this.props.redirect
        : '/sign-in';
      browserHistory.push(path);
    } else if (this.props.noPass) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <div>
          {React.Children.map(this.props.children, child =>
            React.cloneElement(child, {
              uid: this.state.uid
            })
          )}
        </div>
      );
    }
  }
}

export default CheckAuth;
