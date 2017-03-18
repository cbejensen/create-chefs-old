import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col } from 'react-bootstrap';

class ParentInputGroup extends React.Component {
  render() {
    return (
      <section>
        <InputGroupHeading heading="Parent or Guardian" />
        <Row>
          <Col xs={12} sm={6}>
            <FormInput controlId="inputParentName"
              onChange={this.props.handleChange.bind(null, 'name')}
              label="Name"
              required />
          </Col>
          <Col xs={12} sm={6}>
            <FormInput controlId="inputParentRelation"
              onChange={this.props.handleChange.bind(null, 'relation')}
              label="Relation" />
          </Col>
        </Row>
      </section>
    )
  }
};

export default ParentInputGroup;
