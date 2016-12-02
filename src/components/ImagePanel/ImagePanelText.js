import React from 'react';
import './index.css';

export default function (props) {
  return (
    <div className="ImagePanelText-container">
      <div className="h2">{props.heading}</div>
      <p>{props.text}</p>
    </div>
  );
}
