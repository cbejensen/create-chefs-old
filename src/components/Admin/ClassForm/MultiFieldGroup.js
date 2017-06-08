import React from 'react';

export default function MultiFieldGroup({
  getValidation,
  label,
  help,
  val,
  ...props
}) {
  return (
    <FormGroup validationState={getValidation}>
      <ControlLabel>
        {label}{props.required && '*'}
      </ControlLabel>
      {props.lessons.map(lesson, i) => (
        <FormControl
          key={i}
          value={lesson}
          style={{ fontSize: '16px' }}
          {...props}
        />
      )}
      {getValidation && <FormControl.Feedback />}
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  )
};
