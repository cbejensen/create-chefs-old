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
            label="Address"/>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput controlId="inputContactCity"
            label="City" />
          </Col>
          <Col xs={3}>
            <FormGroup controlId="selectContactState">
              <ControlLabel>State</ControlLabel>
              <FormControl componentClass="select">
                {statesArray.map((state, i) => {
                  return <option key={i} value={state}>{state}</option>
                })}
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormInput controlId="inputContactZip"
            label="Zip" />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput controlId="inputContactPhone"
            label="Phone" />
          </Col>
          <Col xs={6}>
            <FormInput controlId="inputContactEmail"
            label="Email" />
          </Col>
        </Row>
      </section>
    )
  }
};

export default ContactInputGroup;
