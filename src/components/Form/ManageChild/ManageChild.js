import React from 'react';
import {FirebaseField} from 'components/FirebaseHelpers';
import {Row, Col} from 'react-bootstrap';

export default function ManageChild(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Row>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`children/${props.childId}/firstName`}
            controlId="childFirstName"
            label="First Name"
            onBlur={props.handleBlur.bind(null, 'firstName')}
            required
          />
        </Col>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`children/${props.childId}/lastName`}
            controlId="childLastName"
            label="Last Name"
            onBlur={props.handleBlur.bind(null, 'lastName')}
            required
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`children/${props.childId}/gender`}
            componentClass="select"
            controlId="childGender"
            label="Gender"
            onBlur={props.handleBlur.bind(null, 'gender')}
          >
            <option>Male</option>
            <option>Female</option>
          </FirebaseField>
        </Col>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`children/${props.childId}/age`}
            controlId="childAge"
            label="Age"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FirebaseField
            path={`children/${props.childId}/allergies`}
            componentClass="textarea"
            controlId="childAllergies"
            label="Allergies"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FirebaseField
            path={`children/${props.childId}/notes`}
            componentClass="textarea"
            controlId="childNotes"
            label="Notes"
          />
        </Col>
      </Row>
    </form>
  );
}
