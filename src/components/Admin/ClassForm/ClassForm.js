import React from 'react';
import FieldGroup from './FieldGroup';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';

export default function ClassForm(props) {
  return (
    <div>
      <input onChange={props.handleChange.bind(null, 'date')} />
      <FieldGroup
        label="Date"
        help="Format should be yyyy-mm-dd"
        onChange={props.handleChange.bind(null, 'date')}
      />
      <FieldGroup
        label="End Date"
        help="Leave blank if class does not extend beyond 1 day"
        onChange={() =>
          props.handleChange.bind(null, 'endDate')}
      />
      <FieldGroup
        label="Start Time"
        help="Format should be hh:mm in military time"
        onChange={() =>
          props.handleChange.bind(null, 'start')}
      />
      <FieldGroup
        label="End Time"
        help="Format should be hh:mm in military time"
        onChange={() =>
          props.handleChange.bind(null, 'end')}
      />
      <FieldGroup
        label="Theme"
        help="The theme of the class or classes"
        onChange={() =>
          props.handleChange.bind(null, 'theme')}
      />
      {/* <FormGroup>
        <ControlLabel>
          Lessons
        </ControlLabel>
        {props.lessons.map((lesson, i) => (
          <FormControl
            value={lesson}
            key={i}
            onChange={props.handleLessonChange.bind(
              null,
              i
            )}
            style={{ fontSize: '16px' }}
          />
        ))}
        <HelpBlock>
          List foods that will be taught
        </HelpBlock>
      </FormGroup> */}
      <Button bsStyle="primary" onClick={props.addLesson}>
        + Add Lesson
      </Button>
    </div>
  );
}
