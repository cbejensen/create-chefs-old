import React from 'react';
import SignInForm from './SignInForm';
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

export default class SignInContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(e) {
    this.setState({email: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(
        user => {
          browserHistory.push('/');
        },
        error => {
          alert(error.message);
          console.log(error.code, error.message);
        },
      );
  }
  render() {
    return (
      <SignInForm
        email={this.state.email}
        password={this.state.password}
        handleEmailChange={this.handleEmailChange}
        handlePasswordChange={this.handlePasswordChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
