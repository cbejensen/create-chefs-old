import React from 'react';
import {FormGroup, FormControl, ControlLabel, HelpBlock} from 'react-bootstrap';
import './index.css';

export default function(
  {controlId, validationState, label, help, val, ...props},
) {
  return (
    <FormGroup controlId={controlId} validationState={validationState}>
      <ControlLabel>
        {label}
        <span className="FormField-required-asterisk">
          {props.required && '*'}
        </span>
      </ControlLabel>
      <FormControl style={{fontSize: '16px'}} {...props}>
        {props.children}
      </FormControl>
      {validationState && <FormControl.Feedback />}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}
