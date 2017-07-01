import React from 'react';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
  render() {
    let acctLink = {
      text: 'sign in',
      to: '/sign-in'
    };
    if (this.props.uid) {
      acctLink.text = 'my account';
      acctLink.to = '/my-account';
    }
    return (
      <div
        className="SideNav-container"
        onClick={this.props.toggleSideNav}
      >
        <SideNavItem text="home" to="/" />
        <SideNavItem text="classes" to="/classes" />
        <SideNavItem {...acctLink} />
        <SideNavItem text="about" to="/about" />
      </div>
    );
  }
}

export default SideNav;
