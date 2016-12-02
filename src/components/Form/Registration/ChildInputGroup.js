import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import { Row, Col, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class ChildInputGroup extends React.Component {
  render() {
    let childNum = '';
    if (this.props.childNum) childNum = this.props.childNum;
    return (
      <section>
        <InputGroupHeading heading={`Child ${childNum}`} />
        <Row>
          <Col sm={6}>
            <FormInput controlId="inputChildName"
              label="Name"
              onChange={this.props.handleChange.bind(
                null, 'name', this.props.index)}
              required autoFocus/>
          </Col>
          <Col xs={6} sm={3}>
            <FormInput controlId="inputChildAge"
              label="Age"
              onChange={this.props.handleChange.bind(
                null, 'age', this.props.index)}
              required />
          </Col>
          <Col xs={6} sm={3}>
            <FormGroup controlId="selectChildGender">
              <ControlLabel>Gender</ControlLabel>
              <FormControl componentClass="select"
                placeholder="test"
                onChange={this.props.handleChange.bind(
                  null, 'gender', this.props.index)}>
                <option></option>
                <option>Male</option>
                <option>Female</option>
              </FormControl>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="inputChildAllergies">
              <ControlLabel>Allergies or Dietary Restrictions</ControlLabel>
              <FormControl componentClass="textarea"
                onChange={this.props.handleChange.bind(
                  null, 'allergies', this.props.index)}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <FormGroup controlId="inputChildOther">
              <ControlLabel>Other Notes</ControlLabel>
              <FormControl componentClass="textarea"
                placeholder="Anything else we should be aware of"
                onChange={this.props.handleChange.bind(
                  null, 'notes', this.props.index)} />
            </FormGroup>
          </Col>
        </Row>
      </section>
    )
  }
};

// controlId, validationState, label, help, val,

export default ChildInputGroup;
