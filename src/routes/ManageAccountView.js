import React from 'react';
import {ManageAccount} from '../components/Form/ManageAccount';
import {Grid, Row, Col} from 'react-bootstrap';
import logoCreate from '../images/logo-create.png';

export default function ManageAccountView(props) {
  return (
    <div className="RegView-container">
      <Grid className="RegView-grid">
        <ManageAccount />
      </Grid>
    </div>
  );
}
