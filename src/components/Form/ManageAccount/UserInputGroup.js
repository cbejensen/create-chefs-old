import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default function UserInputGroup(props) {
  const statesArray = ['UT', 'CA', 'NV'];
  return (
    <section>
      <InputGroupHeading heading="Basic Info" />
      <Row>
        <Col xs={6} md={4}>
          <FormInput
            value={props.firstName}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'firstName')}
            label="First Name"
            required
          />
        </Col>
        <Col xs={6} md={4}>
          <FormInput
            value={props.lastName}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'lastName')}
            label="Last Name"
            required
          />
        </Col>
        <Col xs={12} sm={8} md={4}>
          <FormInput
            value={props.phone}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'phone')}
            label="Phone"
            required
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} sm={8} md={6}>
          <FormInput
            value={props.address}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'address')}
            label="Address"
            required
          />
        </Col>
      </Row>
      <Row>
        <Col xs={6}>
          <FormInput
            value={props.city}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'city')}
            label="City"
            required
          />
        </Col>
        <Col xs={3}>
          <FormGroup controlId="selectContactState">
            <ControlLabel>State</ControlLabel>
            <FormControl
              componentClass="select"
              onChange={props.handleChange.bind(null, 'state')}
            >
              {statesArray.map((state, i) => {
                return (
                  <option required key={i}>
                    {state}
                  </option>
                );
              })}
            </FormControl>
          </FormGroup>
        </Col>
        <Col xs={3}>
          <FormInput
            value={props.zip}
            controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'zip')}
            label="Zip Code"
            required
          />
        </Col>
      </Row>
    </section>
  );
}
