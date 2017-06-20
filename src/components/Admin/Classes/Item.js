import React from 'react';

export default function Item(props) {
  return (
    <div>
      <strong>{props.text}</strong>{props.children}
    </div>
  );
}
