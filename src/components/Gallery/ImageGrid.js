import React from 'react';

const ImageGrid = props => {
  // TODO: use background-img so images crop and center correctly
  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    imgWrap: {
      width: '25%',
      paddingTop: '25%',
      overflow: 'hidden',
      margin: '5px',
      position: 'relative',
      cursor: 'pointer'
    },
    img: {
      width: '100%',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translateY(-50%) translateX(-50%)'
    }
  };
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
                title: img.title
              });
            })}
          </div>
        );
      })}
    </div>
  );
};

ImageGrid.propTypes = {
  images: React.PropTypes.array,
  onClick: React.PropTypes.func
};

export default ImageGrid;
