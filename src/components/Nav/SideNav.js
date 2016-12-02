import React from 'react';
import SideNavItem from './SideNavItem';

class SideNav extends React.Component {
  render() {
    const navItems = [{
      text: 'home',
      path: '/'
    }, {
      text: 'register',
      path: '/register'
    }, {
      text: 'about',
      path: '/about'
    }]
    return (
      <div className="SideNav-container">
        {navItems.map((item, i) => {
          return <SideNavItem key={i}
              text={item.text}
              path={item.path}
              closeSideNav={this.props.toggleSideNav}/>
        })}
      </div>
    )
  }
};

export default SideNav;
