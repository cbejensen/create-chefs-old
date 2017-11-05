import React from 'react';
import ImageGrid from './ImageGrid';

class ImageGridContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lightbox: 0 };
  }
  showLightbox = index => {
    this.setState({ lightbox: index });
  };
  hideLightbox = () => {
    this.setState({ lightbox: 0 });
  };
  prevLightbox = () => {
    this.setState((prevState, props) => {
      const current = prevState.lightbox;
      // if user is on first image
      // go to last image
      if (current === 1) {
        return { lightbox: this.props.images.length };
      } else {
        return { lightbox: current - 1 };
      }
    });
  };
  nextLightbox = () => {
    this.setState((prevState, props) => {
      const current = prevState.lightbox;
      // if user is on last image
      // go to first image
      if (current === this.props.images.length) {
        return { lightbox: 1 };
      } else {
        return { lightbox: current + 1 };
      }
    });
  };
  render() {
    return (
      <ImageGrid
        images={this.props.images}
        {...this.state}
        showLightbox={this.showLightbox}
        hideLightbox={this.hideLightbox}
        prevLightbox={this.prevLightbox}
        nextLightbox={this.nextLightbox}
      />
    );
  }
}

export default ImageGridContainer;
