import React from 'react';
import './index.css';

export default function (props) {
  return (
    <div className="ImagePanelText-container">
      <div className="ImagePanelText-header">{props.heading}</div>
      <div className="ImagePanelText-body">{props.text}</div>
    </div>
  );
}
