import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col } from 'react-bootstrap';

class EmergencyInputGroup extends React.Component {
  render() {
    return (
      <section>
        <InputGroupHeading heading="Emergency Contact"
          subHeading="if different than parent or guardian above" />
        <Row>
          <Col xs={12} md={6}>
            <FormInput controlId="inputEmergencyName"
              onChange={this.props.handleChange.bind(null, 'name')}
              label="Name" />
          </Col>
          <Col xs={6} md={3}>
            <FormInput controlId="inputEmergencyRelation"
              onChange={this.props.handleChange.bind(null, 'relation')}
              label="Relation" />
          </Col>
          <Col xs={6} md={3}>
            <FormInput controlId="inputEmergencyPhone"
              onChange={this.props.handleChange.bind(null, 'phone')}
              label="Phone" />
          </Col>
        </Row>
      </section>
    )
  }
};

export default EmergencyInputGroup;
