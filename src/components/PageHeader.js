import React from 'react';

export default function PageHeader(props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </div>
  );
}
