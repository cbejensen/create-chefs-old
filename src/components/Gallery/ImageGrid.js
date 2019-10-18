import React from 'react'

const ImageGrid = props => {
  // TODO: use background-img so images crop and center correctly
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    imgWrap: {
      width: '200px',
      height: '200px',
      margin: '10',
      cursor: 'pointer',
    },
    img: {
      objectFit: 'cover',
      width: '100%',
      height: '100%',
    },
  }
  return (
    <div style={styles.container}>
      {props.images.map((img, index) => {
        return (
          <div key={index} style={styles.imgWrap}>
            <img
              src={img.src}
              alt={img.alt}
              title={img.title}
              style={styles.img}
              onClick={() => props.onClick(index + 1)}
            />
            {React.Children.map(props.children, child => {
              return React.cloneElement(child, {
                index: index,
                src: img.src,
                alt: img.alt,
                title: img.title,
              })
            })}
          </div>
        )
      })}
    </div>
  )
}

ImageGrid.propTypes = {
  images: React.PropTypes.array,
  onClick: React.PropTypes.func,
}

export default ImageGrid
