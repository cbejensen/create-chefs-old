import React from 'react';
import ImageGrid from './ImageGrid';
import Lightbox from './Lightbox';

class ImageGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeLightbox: 0 };
  }
  showLightbox = num => {
    this.setState({ activeLightbox: num });
  };
  hideLightbox = () => {
    this.setState({ activeLightbox: 0 });
  };
  prevLightbox = e => {
    this.setState((prevState, props) => {
      const current = prevState.activeLightbox;
      // if user is on first image
      // go to last image
      if (current === 1) {
        return { activeLightbox: this.props.images.length };
      } else {
        return { activeLightbox: current - 1 };
      }
    });
  };
  nextLightbox = e => {
    this.setState((prevState, props) => {
      const current = prevState.activeLightbox;
      // if user is on last image
      // go to first image
      if (current === this.props.images.length) {
        return { activeLightbox: 1 };
      } else {
        return { activeLightbox: current + 1 };
      }
    });
  };
  render() {
    return (
      <ImageGrid images={this.props.images} onClick={this.showLightbox}>
        <Lightbox
          active={this.state.activeLightbox}
          hide={this.hideLightbox}
          prev={this.prevLightbox}
          next={this.nextLightbox}
        />
      </ImageGrid>
    );
  }
}

export default ImageGridContainer;
