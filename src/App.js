import React from 'react';
import {Nav, NavLarge, SideNav} from './components/Nav';
import CheckAuth from 'components/CheckAuth';
import {Footer} from './components/Footer';
import {browserHistory} from 'react-router';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNav: false,
    };
    this.toggleSideNav = this.toggleSideNav.bind(this);
    this.showInfo = this.showInfo.bind(this);
  }
  toggleSideNav() {
    this.setState({
      sideNav: !this.state.sideNav,
    });
  }
  showInfo() {
    browserHistory.push('/about');
  }
  render() {
    const styles = {
      content: this.state.sideNav
        ? 'App-content App-show-side-nav'
        : 'App-content',
    };
    return (
      <div className="App-wrapper">
        <div className={styles.content}>
          <CheckAuth>
            <SideNav toggleSideNav={this.toggleSideNav} />
          </CheckAuth>
          <Nav toggleSideNav={this.toggleSideNav} showInfo={this.showInfo} />
          <CheckAuth>
            <NavLarge />
          </CheckAuth>
          <main
            onClick={this.state.sideNav && this.toggleSideNav}
            className="App-main"
            ref={e => {
              this.main = e;
            }}
          >
            {this.props.children}
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
