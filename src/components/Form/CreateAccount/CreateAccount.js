import React from 'react';
import Agreement from '../Agreement';
import {Button} from 'react-bootstrap';
import FormField from '../FormField';
import {Link} from 'react-router';

export default function CreateAccount(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <h1 style={{marginBottom: '5px'}}>Create Account</h1>
      <div style={{margin: '10px'}}>
        <Link to="/sign-in">or click here to sign in</Link>
      </div>
      <div style={{margin: '10px'}}>
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
        <Button
          type={props.creatingUser ? 'button' : 'submit'}
          bsStyle="primary"
          bsSize="large"
          disabled={props.creatingUser}
        >
          {props.creatingUser ? 'Loading...' : 'Submit'}
        </Button>
        <p style={{marginTop: '10px'}}>
          By creating an account, you agree to the terms and conditions below.
        </p>
        <hr />
        <Agreement />
      </div>
    </form>
  );
}
