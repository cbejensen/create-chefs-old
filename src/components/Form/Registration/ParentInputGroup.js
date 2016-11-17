import React from 'react';
import FormInput from '../FormInput';
import RegistrationInputGroup from './RegistrationInputGroup';
import { Row, Col } from 'react-bootstrap';

class ParentInputGroup extends React.Component {
  render() {
    return (
      <RegistrationInputGroup heading="Parent or Guardian">
        <Row>
          <Col xs={12} sm={6}>
            <FormInput controlId="inputParentName"
            label="Name" />
          </Col>
          <Col xs={12} sm={6}>
            <FormInput controlId="inputParentRelation"
            label="Relation" />
          </Col>
        </Row>
      </RegistrationInputGroup>
    )
  }
};

export default ParentInputGroup;
