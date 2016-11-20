import React from 'react';
import FormInput from '../FormInput';
import RegistrationInputGroup from './RegistrationInputGroup';
import { Row, Col } from 'react-bootstrap';

class EmergencyInputGroup extends React.Component {
  render() {
    return (
      <RegistrationInputGroup heading="Emergency Contact"
        subHeading="if different than parent or guardian above">
        <Row>
          <Col xs={12} md={6}>
            <FormInput controlId="inputEmergencyName"
            label="Name" />
          </Col>
          <Col xs={6} md={3}>
            <FormInput controlId="inputEmergencyRelation"
            label="Relation" />
          </Col>
          <Col xs={6} md={3}>
            <FormInput controlId="inputEmergencyPhone"
            label="Phone" />
          </Col>
        </Row>
      </RegistrationInputGroup>
    )
  }
};

export default EmergencyInputGroup;
