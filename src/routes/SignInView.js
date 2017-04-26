import React from 'react';
import {SignIn} from 'components/Form/SignIn';
import CheckAuth from 'components/CheckAuth';
import {Grid} from 'react-bootstrap';

export default function SignInView(props) {
  return (
    <Grid>
      <CheckAuth>
        <SignIn />
      </CheckAuth>
    </Grid>
  );
}
