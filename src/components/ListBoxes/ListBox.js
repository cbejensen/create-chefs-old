import React from 'react';
import {Button} from 'react-bootstrap';

export default function ListBox(props) {
  return (
    <Button bsStyle="primary" onClick={props.handleClick}>
      {props.text}
    </Button>
  );
}

ListBox.propTypes = {
  text: React.PropTypes.string.isRequired,
  handleClick: React.PropTypes.func.isRequired,
};
