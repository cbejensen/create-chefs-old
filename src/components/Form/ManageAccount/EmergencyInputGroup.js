import React from 'react';
import {FirebaseField} from 'components/FirebaseCustom';
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
          <FirebaseField
            path={`users/${props.uid}/emergency/firstName`}
            controlId="emergencyFirstName"
            label="First Name"
          />
        </Col>
        <Col xs={12} sm={4} md={3}>
          <FirebaseField
            path={`users/${props.uid}/emergency/lastName`}
            controlId="emergencyLastName"
            label="Last Name"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={3}>
          <FirebaseField
            path={`users/${props.uid}/emergency/relation`}
            controlId="emergencyRelation"
            label="Relation to Children"
          />
        </Col>
        <Col xs={12} md={3}>
          <FirebaseField
            path={`users/${props.uid}/emergency/phone`}
            controlId="emergencyPhone"
            label="Phone"
          />
        </Col>
      </Row>
    </section>
  );
}
