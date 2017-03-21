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
            <FormInput value={this.props.contact.address} controlId="inputContactAddress"
              onChange={this.props.handleChange.bind(null, 'address')}
              label="Address"
              required />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput value={this.props.contact.city} controlId="inputContactCity"
              onChange={this.props.handleChange.bind(null, 'city')}
              label="City"
              required />
          </Col>
          <Col xs={3}>
            <FormGroup controlId="selectContactState">
              <ControlLabel>State</ControlLabel>
              <FormControl componentClass="select"
                onChange={this.props.handleChange.bind(null, 'state')}>
                {statesArray.map((state, i) => {
                  return (
                    <option value={this.props.contact.state} required key={i}>
                      {state}
                    </option>
                  )
                })}
              </FormControl>
            </FormGroup>
          </Col>
          <Col xs={3}>
            <FormInput value={this.props.contact.zip} controlId="inputContactZip"
              onChange={this.props.handleChange.bind(null, 'zip')}
              label="Zip Code"
              required />
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            <FormInput value={this.props.contact.phone} controlId="inputContactPhone"
              onChange={this.props.handleChange.bind(null, 'phone')}
              label="Phone"
              required />
          </Col>
          <Col xs={6}>
            <FormInput value={this.props.contact.email} controlId="inputContactEmail"
              onChange={this.props.handleChange.bind(null, 'email')}
              label="E-mail"
              required />
          </Col>
        </Row>
      </section>
    )
  }
};

export default ContactInputGroup;
