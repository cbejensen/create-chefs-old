import React from 'react';
import ImageGrid from './ImageGridContainer';
import images from './GalleryImages';

const Gallery = props => {
  const styles = {
    title: {
      textAlign: 'center'
    }
  };
  return (
    <div>
      <h1 style={styles.title}>Gallery</h1>
      <ImageGrid images={images} />
    </div>
  );
};

export default Gallery;
