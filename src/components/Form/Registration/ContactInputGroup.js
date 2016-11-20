import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ContactInputGroup extends React.Component {
  render() {
    const statesArray = ['UT', 'CA', 'NV'];
    return (
      <section>
        <InputGroupHeading heading="Contact Info" />
        <Row>
          <Col xs={12} >
            <FormInput controlId="inputContactAddress"
              label="Address"
              required />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput controlId="inputContactCity"
              label="City"
              required />
          </Col>
          <Col xs={3}>
            <FormGroup controlId="selectContactState">
              <ControlLabel>State</ControlLabel>
              <FormControl componentClass="select">
                {statesArray.map((state, i) => {
                  return (
                    <option required key={i} value={state}>
                      {state}
                    </option>
                  )
                })}
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormInput controlId="inputContactZip"
              label="Zip"
              required />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput controlId="inputContactPhone"
              label="Phone"
              required />
          </Col>
          <Col xs={6}>
            <FormInput controlId="inputContactEmail"
              label="E-mail"
              required />
          </Col>
        </Row>
      </section>
    )
  }
};

export default ContactInputGroup;
