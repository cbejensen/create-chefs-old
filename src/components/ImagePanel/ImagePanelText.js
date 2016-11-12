import React from 'react';

export default function (props) {
  return (
    <div className="ImagePanelText-container">
      <div className="h2">{props.heading}</div>
      <div>{props.text}</div>
    </div>
  );
}
