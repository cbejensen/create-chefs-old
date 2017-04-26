import React from 'react';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
  render() {
    let acctLink = {
      text: 'sign in',
      path: '/sign-in',
    };
    if (this.props.uid) {
      acctLink.text = 'my account';
      acctLink.path = '/my-account';
    }
    return (
      <div className="SideNav-container" onClick={this.props.toggleSideNav}>
        <SideNavItem text="home" path="/" />
        <SideNavItem text="classes" path="/classes" />
        <SideNavItem {...acctLink} />
        <SideNavItem text="about" path="/about" />
      </div>
    );
  }
}

export default SideNav;
