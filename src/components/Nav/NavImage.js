import React from 'react';
import { Link } from 'react-router';
import './index.css'

class NavImage extends React.Component {
  render() {
    return (
      <div className="NavImage-container">
        <Link to={this.props.to}>
          <img src={this.props.img} alt={this.props.alt} />
        </Link>
      </div>
    )
  }
};

export default NavImage;
