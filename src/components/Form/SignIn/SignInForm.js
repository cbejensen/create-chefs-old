import React from 'react';
import FormField from '../FormField';
import {Form, Button} from 'react-bootstrap';
import {Link} from 'react-router';

export default function SignInForm(props) {
  return (
    <Form onSubmit={props.handleSubmit}>
      <h1>Sign In</h1>
      <div style={{margin: '10px'}}>
        <Link to="/create-account">or click here to create an account</Link>
      </div>
      <div style={{margin: '10px'}}>
        <FormField
          label="E-mail"
          autoFocus
          value={props.email}
          onChange={props.handleEmailChange}
          required
        />
        {' '}
        <FormField
          label="Password"
          type="password"
          value={props.password}
          onChange={props.handlePasswordChange}
          required
        />
        {' '}
        <Button type="submit" bsStyle="primary" bsSize="large">
          Sign In
        </Button>
      </div>
    </Form>
  );
}
