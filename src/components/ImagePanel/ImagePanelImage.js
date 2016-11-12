import React from 'react';
import { Image } from 'react-bootstrap';

export default function (props) {
  return (
    <Image className="ImagePanelImage"
      src={props.src}
      alt={props.alt}/>
  );
};
