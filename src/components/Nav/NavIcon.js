import React from 'react';
import { Glyphicon } from 'react-bootstrap';

class NavIcon extends React.Component {
  render() {
    return (
      <div className="NavIcon-container">
        <Glyphicon glyph={this.props.glyph} />
      </div>
    )
  }
};

export default NavIcon;
