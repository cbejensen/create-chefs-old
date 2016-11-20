import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ChildInputGroup extends React.Component {
  render() {
    return (
      <section>
        <InputGroupHeading heading="Child" />
        <Row>
          <Col sm={6}>
            <FormInput controlId="inputChildName"
              label="Name"
              required />
          </Col>
          <Col xs={6} sm={3}>
            <FormInput controlId="inputChildAge"
              label="Age"
              required />
          </Col>
          <Col xs={6} sm={3}>
            <FormGroup controlId="selectChildGender">
              <ControlLabel>Gender</ControlLabel>
              <FormControl componentClass="select" placeholder="test">
                <option value="0">Male</option>
                <option value="1">Female</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="inputChildAllergies">
              <ControlLabel>Allergies or Dietary Restrictions</ControlLabel>
              <FormControl componentClass="textarea" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="inputChildOther">
              <ControlLabel>Other Notes</ControlLabel>
              <FormControl componentClass="textarea"
                placeholder="Anything else we should be aware of?" />
            </FormGroup>
          </Col>
        </Row>
      </section>
    )
  }
};

// controlId, validationState, label, help, val,

export default ChildInputGroup;
