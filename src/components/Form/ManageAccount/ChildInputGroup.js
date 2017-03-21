import React from 'react';
import FormInput from '../FormInput';
import InputGroupHeading from './InputGroupHeading';
import {Row, Col, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';

export default function ChildInputGroup(props) {
  let childNum = props.childNum || '';
  return (
    <section>
      <InputGroupHeading heading={`Child ${childNum}`} />
      <Row>
        <Col sm={6}>
          <FormInput
            value={props.child.name}
            controlId="inputChildName"
            label="Name"
            onChange={props.handleChange.bind(null, 'name', props.index)}
            required
          />
        </Col>
        <Col xs={6} sm={3}>
          <FormInput
            value={props.child.age}
            controlId="inputChildAge"
            label="Age"
            onChange={props.handleChange.bind(null, 'age', props.index)}
            required
          />
        </Col>
        <Col xs={6} sm={3}>
          <FormGroup controlId="selectChildGender">
            <ControlLabel>Gender</ControlLabel>
            <FormControl
              value={props.child.gender}
              componentClass="select"
              placeholder="test"
              onChange={props.handleChange.bind(null, 'gender', props.index)}
            >
              <option />
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
            <FormControl
              value={props.child.allergies}
              componentClass="textarea"
              onChange={props.handleChange.bind(null, 'allergies', props.index)}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <FormGroup controlId="inputChildOther">
            <ControlLabel>Other Notes</ControlLabel>
            <FormControl
              value={props.child.notes}
              componentClass="textarea"
              placeholder="Anything else we should be aware of"
              onChange={props.handleChange.bind(null, 'notes', props.index)}
            />
          </FormGroup>
        </Col>
      </Row>
    </section>
  );
}
