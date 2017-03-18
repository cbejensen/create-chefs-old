import React from 'react';
import CreateAccount from './CreateAccount';
import {createUser} from 'utils/firebaseHelpers';
import {browserHistory} from 'react-router';

class CreateAccountContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      },
      creatingUser: false,
    };
    this.validatePassword = this.validatePassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  validatePassword() {
    const length = this.state.user.password.length;
    if (length === 0) return null;
    else if (length < 6) return 'error';
    else return 'success';
  }
  handleChange(field, e) {
    this.setState({user: {...this.state.user, [field]: e.target.value}});
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.user.password.length >= 6) {
      this.setState({creatingUser: true});
      createUser(this.state.user).then(
        res => {
          console.log(res);
          browserHistory.push('/');
        },
        err => {
          this.setState({creatingUser: false});
          alert(err);
        },
      );
    } else {
      alert('Password must be at least 6 characters');
    }
  }
  render() {
    return (
      <CreateAccount
        {...this.state}
        validatePassword={this.validatePassword}
        handleChange={this.handleChange}
        handleAvatarChange={this.handleAvatarChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default CreateAccountContainer;
