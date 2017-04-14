import React from 'react';
import {FirebaseField} from 'components/FirebaseCustom';
import {Row, Col} from 'react-bootstrap';

export default function ManageChild(props) {
  const childPath = `children/${props.childId}`;
  return (
    <div>
      <Row>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`${childPath}/firstName`}
            controlId="childFirstName"
            label="First Name"
            required
          />
        </Col>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`${childPath}/lastName`}
            controlId="childLastName"
            label="Last Name"
            required
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`${childPath}/gender`}
            componentClass="select"
            controlId="childGender"
            label="Gender"
          >
            <option>Male</option>
            <option>Female</option>
          </FirebaseField>
        </Col>
        <Col xs={12} sm={6}>
          <FirebaseField
            path={`${childPath}/age`}
            controlId="childAge"
            label="Age"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FirebaseField
            path={`${childPath}/allergies`}
            componentClass="textarea"
            controlId="childAllergies"
            label="Allergies"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FirebaseField
            path={`${childPath}/notes`}
            componentClass="textarea"
            controlId="childNotes"
            label="Notes"
          />
        </Col>
      </Row>
    </div>
  );
}
