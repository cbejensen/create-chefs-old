import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class NavIcon extends React.Component {
  render() {
    return (
      <Glyphicon glyph={this.props.glyph}
        className="NavIcon-glyph"/>
    )
  }
};

export default NavIcon;
