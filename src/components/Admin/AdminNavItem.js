import React from 'react';

export default function AdminNavItem(props) {
  return (
    <span onClick={props.handleClick.bind(null, props.id)} style={props.style}>
      {props.text}
    </span>
  );
}
