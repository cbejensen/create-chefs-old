import React from 'react';
import ListBox from './ListBox';
import {browserHistory} from 'react-router';

export default function ChildBox(props) {
  const text = `${props.child.firstName} ${props.child.lastName}`;
  return (
    <ListBox
      id={props.id}
      text={text}
      handleClick={() => browserHistory.push(`my-account/children/${props.id}`)}
    />
  );
}
