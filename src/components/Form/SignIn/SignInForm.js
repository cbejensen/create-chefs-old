import React from 'react';
import FormInput from '../FormInput'
import { Form, Button } from 'react-bootstrap'

export default function SignInForm(props) {
  return (
      <Form onSubmit={props.handleSubmit}>
        <FormInput label='E-mail'
          autoFocus
          value={props.email}
          onChange={props.handleEmailChange}
          required />
        {' '}
        <FormInput label='Password'
          type='password'
          value={props.password}
          onChange={props.handlePasswordChange}
          required />
        {' '}
        <Button type="submit" bsStyle="primary" bsSize="large">
          Sign In
        </Button>
      </Form>
  )
}
