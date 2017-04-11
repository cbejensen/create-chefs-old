import React from 'react';
import FormWrapper from 'components/Form/FormWrapper';
import {ManageAccount} from '../components/Form/ManageAccount';
import CheckAuth from 'components/CheckAuth';
import {Grid, Row, Col} from 'react-bootstrap';
import logoCreate from '../images/logo-create.png';

export default function ManageAccountView(props) {
  return (
    <FormWrapper title="Manage Account">
      <Grid>
        <CheckAuth>
          <ManageAccount />
        </CheckAuth>
      </Grid>
    </FormWrapper>
  );
}
