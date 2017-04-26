import React from 'react';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';

export default function ChildBox(props) {
  const handleClick = () => {
    if (props.handleClick) {
      props.handleClick();
    } else {
      browserHistory.push(`/children/${props.id}`);
    }
  };
  return (
    <Button
      onClick={handleClick}
      bsStyle={props.bsStyle || 'primary'}
      style={{...props.style}}
    >
      {props.name}
    </Button>
  );
}
