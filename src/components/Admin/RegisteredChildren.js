import React from 'react';
import RegisteredChild from './RegisteredChild';

export default function RegisteredChildren(props) {
  const childArray = Object.keys(props.registered).map(id =>
    <RegisteredChild key={id} id={id} />
  );
  return (
    <div>
      {childArray}
    </div>
  );
}
