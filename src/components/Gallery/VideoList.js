import React from 'react'
import omelette from '../../images/2020-06-06/omelette.mov'
import toastedCheesyGoodness from '../../images/2020-06-06/toasted-cheesy-goodness.mov'

export default function VideoList(props) {
  const styles = {
    ul: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
    },
    video: {
      display: 'block',
      margin: 'auto',
      width: '100%',
      maxHeight: '100vh',
      maxWidth: '800px',
    },
  }
  return (
    <ul style={styles.ul}>
      <li>
        <video controls src={omelette} style={styles.video}></video>
      </li>
      <li>
        <video
          controls
          src={toastedCheesyGoodness}
          style={styles.video}
        ></video>
      </li>
    </ul>
  )
}
