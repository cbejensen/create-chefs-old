import React from 'react';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
  render() {
    let acctLink = {
      text: 'sign in',
      to: '/sign-in'
    };
    const isAdmin =
      this.props.uid === 'tDHYraX5Iqes7WDq4Ne474qk30n1' ||
      this.props.uid === '8KRkYoGQnTTBbMbl0PYRdneUbqO2' ||
      this.props.uid === 'naTnIcQXtSY3KX8Zr0pbllIh7772';
    if (this.props.uid) {
      acctLink.text = 'my account';
      acctLink.to = '/my-account';
    }
    return (
      <div className="SideNav-container" onClick={this.props.toggleSideNav}>
        <SideNavItem text="home" to="/" />
        <SideNavItem text="classes" to="/classes" />
        <SideNavItem {...acctLink} />
        <SideNavItem text="gallery" to="/gallery" />
        <SideNavItem text="about" to="/about" />
        {isAdmin && <SideNavItem text="admin" to="/admin" />}
      </div>
    );
  }
}

export default SideNav;
