import React from 'react';
import './ImageGrid.css';
import 'css/z-index.css';

const ImageGrid = props => {
  // TODO: use background-img so images crop and center correctly
  // TODO: implement props.prevLightbox and props.nextLightbox
  // TODO: remove css and use js-in-css
  return (
    <div className="ImageGrid-container">
      {props.images.map((img, index) => {
        console.log('render');
        const pos = index + 1;
        const styles = {
          lightbox: {
            display: props.lightbox === pos ? 'flex' : 'none'
          }
        };
        return (
          <div key={index} className="ImageGrid-image">
            <img
              src={img.src}
              alt={img.alt}
              title={img.alt}
              onClick={() => props.showLightbox(pos)}
            />
            <div
              className="ImageGrid-lightbox lightbox"
              style={styles.lightbox}
              onClick={props.hideLightbox}
            >
              <img src={img.src} alt={img.alt} title={img.alt} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageGrid;
