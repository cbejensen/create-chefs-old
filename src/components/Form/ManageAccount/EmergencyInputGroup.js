import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import {Row, Col} from 'react-bootstrap';

export default function EmergencyInputGroup(props) {
  return (
    <section>
      <InputGroupHeading
        heading="Emergency Contact"
        subHeading="if different than parent or guardian above"
      />
      <Row>
        <Col xs={12} sm={4} md={3}>
          <FormInput
            value={props.emergency.firstName}
            controlId="inputEmergencyName"
            onChange={props.handleChange.bind(null, 'firstName')}
            label="First Name"
          />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <FormInput
            value={props.emergency.lastName}
            controlId="inputEmergencyName"
            onChange={props.handleChange.bind(null, 'lastName')}
            label="Last Name"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <FormInput
            value={props.emergency.relation}
            controlId="inputEmergencyRelation"
            onChange={props.handleChange.bind(null, 'relation')}
            label="Relation"
          />
        </Col>
        <Col xs={12} md={3}>
          <FormInput
            value={props.emergency.phone}
            controlId="inputEmergencyPhone"
            onChange={props.handleChange.bind(null, 'phone')}
            label="Phone"
          />
        </Col>
      </Row>
    </section>
  );
}
