import React from 'react';
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

class CheckAuth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {uid: null};
  }
  componentDidMount() {
    this.removeAuthListener = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        // pass user ID to children
        this.setState({uid: user.uid});
      } else if (!this.props.redirect) {
        // pass false to children
        this.setState({uid: false});
      } else {
        // if redirect is string path, go there
        // otherwise redirect to sign-in page
        const path = typeof this.props.redirect === 'string'
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
    if (this.state.uid === null) return null;
    const props = {...this.props, uid: this.state.uid};
    return (
      <div>
        {React.cloneElement(this.props.children, props)}
      </div>
    );
  }
}

export default CheckAuth;
