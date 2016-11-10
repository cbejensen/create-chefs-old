import React from 'react';
import { Image } from 'react-bootstrap';
import './ImagePanel.css'

export default function ImagePanel(props) {
  const style = {
    float: 'left',
    textAlign: 'left'
  }
  if (props.floatRight) {
    style.float = 'right';
    style.textAlign = 'right';
  }
  return (
    <div className="ImagePanel-container">
      <div className="ImagePanel-img-container" style={style}>
        <Image className="ImagePanel-img" rounded
          src={props.src}
          alt={props.alt}/>
      </div>
      <div className="ImagePanel-text-container" style={style}>
        <div className="ImagePanel-text">
          <div className="h2">{props.title}</div>
          <div>{props.text}</div>
        </div>
      </div>
    </div>
  );
}
