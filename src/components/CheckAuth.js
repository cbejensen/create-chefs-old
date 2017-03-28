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
        this.setState({uid: user.uid});
      } else {
        browserHistory.push(this.props.redirect || '/sign-in');
      }
    });
  }
  componentWillUnmount() {
    this.removeAuthListener();
  }
  render() {
    if (!this.state.uid) return null;
    return (
      <div>
        {React.cloneElement(this.props.children, {
          uid: this.state.uid,
        })}
      </div>
    );
  }
}

export default CheckAuth;
