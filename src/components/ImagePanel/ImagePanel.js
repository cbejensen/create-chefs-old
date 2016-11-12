import React from 'react';
import ImagePanelImage from './ImagePanelImage';
import ImagePanelText from './ImagePanelText';
import { Row, Col, Image } from 'react-bootstrap';
import './ImagePanel.css'

export default function ImagePanel(props) {
  const img = <ImagePanelImage src={props.src}
    alt={props.alt} />
  const text = <ImagePanelText heading={props.heading}
    text={props.children} />
  const panelArray = [{
    component: img,
    style: {
      padding: 0
    }
  }, {
    component: text,
    style: {
      padding: '40px'
    }
  }]
  if (props.imgRight) {
    // swap img and text
    const panelImg = panelArray[0];
    panelArray[0] = panelArray[1];
    panelArray[1] = panelImg;
  }
  return (
    <div className="ImagePanel-container">
      <Col xs={6}
        style={panelArray[0].style}
        className="ImagePanel-left">
        {panelArray[0].component}
      </Col>
      <Col xs={6}
        style={panelArray[1].style}
        className="ImagePanel-right">
        {panelArray[1].component}
      </Col>
    </div>
  );
}
