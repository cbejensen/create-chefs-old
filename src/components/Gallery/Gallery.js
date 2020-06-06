import React from 'react'
import ImageGrid from './ImageGridContainer'
import VideoList from './VideoList'
import images from './GalleryImages'
import { Tabs, Tab } from 'react-bootstrap'

const Gallery = (props) => {
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
      <Tabs defaultActiveKey="images">
        <Tab eventKey="images" title="Images">
          <ImageGrid images={images} />
        </Tab>
        <Tab eventKey="videos" title="Videos">
          <VideoList></VideoList>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Gallery
