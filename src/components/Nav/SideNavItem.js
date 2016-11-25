import React from 'react';
import { Link } from 'react-router';

class SideNavItem extends React.Component {
  render() {
    return (
      <Link className="SideNavItem-container"
        to={this.props.path}
        onClick={this.props.closeSideNav}>
        <div className="SideNavItem">{this.props.text}</div>
      </Link>
    )
  }
};

export default SideNavItem;
