import React from 'react';
import ImagePanelText from './ImagePanelText';
import {Col} from 'react-bootstrap';
import './index.css';

export default function ImagePanel(props) {
  const text = <ImagePanelText heading={props.heading} text={props.children} />;
  const panelArray = [
    {
      style: {
        padding: 0,
        backgroundImage: 'url(' + props.src + ')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
      },
    },
    {
      component: text,
      style: {
        padding: '40px 20px',
      },
    },
  ];
  if (props.imgRight) {
    // swap img and text
    const panelImg = panelArray[0];
    panelArray[0] = panelArray[1];
    panelArray[1] = panelImg;
  }
  return (
    <div>
      <Col xs={6} style={panelArray[0].style} className="ImagePanel-left">
        {panelArray[0].component}
      </Col>
      <Col xs={6} style={panelArray[1].style} className="ImagePanel-right">
        {panelArray[1].component}
      </Col>
    </div>
  );
}
