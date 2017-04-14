import React from 'react';
import {FormWrapper} from 'components/Form';
import {FirebaseField, FirebaseListener} from 'components/FirebaseCustom';
import {Row, Col} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default function ManageChild(props) {
  const childPath = `children/${props.childId}`;
  const title = (
    <FirebaseListener
      path={`children/${props.childId}`}
      transform={child => child.firstName + ' ' + child.lastName}
      passDataAs="title"
      returnAsText
    />
  );
  return (
    <FormWrapper
      title={title}
      backBtnText="Manage Account"
      handleClick={() => browserHistory.push('my-account')}
    >
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
    </FormWrapper>
  );
}
