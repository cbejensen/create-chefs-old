import React from 'react';
import { RegistrationForm } from '../components/Form/Registration';
import { Grid, Row, Col } from 'react-bootstrap';
import logoCreate from '../images/logo-create.png';

export default function (props) {
  return (
    <main>
      <Grid>
        <Row className="RegView-logo-container">
          <Col xs={12}>
            <img src={logoCreate} alt="CREATE" />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <RegistrationForm />
          </Col>
        </Row>
      </Grid>
    </main>
  );
}
