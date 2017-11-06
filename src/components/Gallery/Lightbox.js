import React from 'react';
import LightboxControls from './LightboxControls';
import 'css/z-index.css';

const LightBox = props => {
  const styles = {
    container: {
      display: props.index + 1 === props.active ? 'flex' : 'none',
      flexDirection: 'column',
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
      outline: 'none'
    },
    imgWrap: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '90vh'
    },
    img: {
      maxWidth: '90%',
      maxHeight: '90%'
    }
  };
  const goTo = (direction, e) => {
    e.stopPropagation();
    props[direction]();
  };
  return (
    <div style={styles.container} className="lightbox" onClick={props.hide}>
      <div style={styles.imgWrap}>
        <img
          src={props.src}
          alt={props.alt}
          title={props.alt}
          style={styles.img}
          onClick={e => props.goTo('next', e)}
        />
      </div>
      <LightboxControls
        hide={props.hideLightbox}
        prev={e => goTo('prev', e)}
        next={e => goTo('next', e)}
      />
    </div>
  );
};

LightBox.propTypes = {
  active: React.PropTypes.number,
  index: React.PropTypes.number,
  prev: React.PropTypes.func,
  next: React.PropTypes.func,
  hide: React.PropTypes.func,
  src: React.PropTypes.string,
  alt: React.PropTypes.string,
  title: React.PropTypes.string
};

export default LightBox;
