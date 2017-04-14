import React from 'react';
import {Glyphicon} from 'react-bootstrap';

export default function BackButton(props) {
  return (
    <div style={{textAlign: 'left'}}>
      <span style={{cursor: 'pointer'}} onClick={props.handleClick}>
        <Glyphicon glyph="arrow-left" />
        <span style={{paddingLeft: '5px'}}>
          {props.text || 'Back'}
        </span>
      </span>
    </div>
  );
}
