import React from 'react';
import ImagePanelImage from './ImagePanelImage';
import ImagePanelText from './ImagePanelText';
import { Row, Col, Image } from 'react-bootstrap';
import './ImagePanel.css'

export default function ImagePanel(props) {
  const img = <ImagePanelImage src={props.src}
    alt={props.alt}
    className="ImagePanel-img" />
  const text = <ImagePanelText heading={props.heading}
    text={props.children}
    className="ImagePanel-text" />
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
    <Row>
      <Col mdOffset={2} md={4} xs={6}
        style={panelArray[0].style}
        className="ImagePanel-left">
        {panelArray[0].component}
      </Col>
      <Col md={4} xs={6}
        style={panelArray[1].style}
        className="ImagePanel-right">
        {panelArray[1].component}
      </Col>
    </Row>
  );
}
