import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col } from 'react-bootstrap';

export default function ParentInputGroup(props) {
  return (
    <section>
      <InputGroupHeading heading="Parent or Guardian" />
      <Row>
        <Col xs={12} sm={6}>
          <FormInput value={props.parent.name} controlId="inputParentName"
            onChange={props.handleChange.bind(null, 'name')}
            label="Name"
            required />
        </Col>
        <Col xs={12} sm={6}>
          <FormInput value={props.parent.relation} controlId="inputParentRelation"
            onChange={props.handleChange.bind(null, 'relation')}
            label="Relation" />
        </Col>
      </Row>
    </section>
  )
};
