import React from 'react';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock
} from 'react-bootstrap';

export default function FieldGroup({
  name,
  val,
  label,
  help,
  getValidation,
  style,
  ...props
}) {
  return (
    <FormGroup
      controlId={name}
      validationState={getValidation}
      style={style}
    >
      <ControlLabel>
        {label}{props.required && '*'}
      </ControlLabel>
      <FormControl
        name={name}
        value={val}
        style={{ fontSize: '16px' }}
        {...props}
      />
      {getValidation && <FormControl.Feedback />}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
