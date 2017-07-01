import React from 'react';
import { CreateAccount } from 'components/Form/CreateAccount';
import { Grid } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

export default function CreateAccountView(props) {
  return (
    <Grid>
      <CreateAccount />
    </Grid>
  );
}
