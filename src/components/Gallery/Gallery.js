import React from 'react'
import ImageGrid from './ImageGridContainer'
import images from './GalleryImages'
// import { getImages } from '../../utils/firebaseHelpers'

const Gallery = props => {
  // getImages()
  const styles = {
    center: {
      textAlign: 'center',
    },
  }
  return (
    <div>
      <h1 style={styles.center}>Gallery</h1>
      <p style={styles.center}>
        Now offering adult classes. Book your next holiday party or team
        building event with us today!
      </p>
      <ImageGrid images={images} />
    </div>
  )
}

export default Gallery
