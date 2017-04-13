import React from 'react';
import {FirebaseField} from 'components/FirebaseHelpers';
import FormField from 'components/Form/FormField';
import InputGroupHeading from './InputGroupHeading';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default function UserInputGroup(props) {
  const statesArray = ['UT', 'CA', 'NV'];
  return (
    <section>
      <InputGroupHeading heading="Basic Info" />
      <Row>
        <Col xs={6} md={4}>
          <FirebaseField
            path={`users/${props.uid}/firstName`}
            controlId="userFirstName"
            label="First Name"
          />
        </Col>
        <Col xs={6} md={4}>
          <FirebaseField
            path={`users/${props.uid}/lastName`}
            controlId="userLastName"
            label="Last Name"
          />
        </Col>
        <Col xs={12} sm={8} md={4}>
          <FirebaseField
            path={`users/${props.uid}/phone`}
            controlId="userPhone"
            label="Phone"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} md={6}>
          <FirebaseField
            path={`users/${props.uid}/address`}
            controlId="userAddress"
            label="Address"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FirebaseField
            path={`users/${props.uid}/city`}
            controlId="userCity"
            label="City"
          />
        </Col>
        <Col xs={3}>
          <FirebaseField
            componentClass="select"
            path={`users/${props.uid}/state`}
            controlId="userState"
            label="State"
          >
            {statesArray.map((state, i) => {
              return (
                <option required key={i}>
                  {state}
                </option>
              );
            })}
          </FirebaseField>
        </Col>
        <Col xs={3}>
          <FirebaseField
            path={`users/${props.uid}/zip`}
            controlId="userZip"
            // onChange={props.handleChange.bind(null, 'zip')}
            label="Zip Code"
          />
        </Col>
      </Row>
    </section>
  );
}
