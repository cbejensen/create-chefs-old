import React from 'react';
import Agreement from '../Agreement';
import {Button} from 'react-bootstrap';
import FormField from '../FormField';

export default function CreateAccount(props) {
  return (
    <form onSubmit={props.handleSubmit} style={{padding: '20px 0'}}>
      <FormField
        label="First Name"
        autoFocus
        required
        value={props.user.firstName}
        onChange={props.handleChange.bind(null, 'firstName')}
      />
      <FormField
        label="Last Name"
        required
        value={props.user.lastName}
        onChange={props.handleChange.bind(null, 'lastName')}
      />
      <FormField
        label="E-mail"
        required
        type="email"
        value={props.user.email}
        onChange={props.handleChange.bind(null, 'email')}
      />
      <FormField
        label="Password"
        required
        type="password"
        help="Must be at least 6 characters"
        pattern=".{6,}"
        title="Choose a password that is 6 characters or longer"
        validationState={props.validatePassword()}
        value={props.user.password}
        onChange={props.handleChange.bind(null, 'password')}
      />
      <hr />
      <Agreement />
      <Button
        type={props.creatingUser ? 'button' : 'submit'}
        bsStyle="primary"
        bsSize="large"
        disabled={props.creatingUser}
      >
        {props.creatingUser ? 'Loading...' : 'Create Account'}
      </Button>
    </form>
  );
}
