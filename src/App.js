import React from 'react';
import {Nav, SideNav} from './components/Nav';
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
  componentDidMount() {
    // const e = this.main;
    // const minHeight = window.innerHeight - 130 + 'px';
    // e.style.minHeight = minHeight;
    // console.log(e.clientHeight);
    // e.style.height = e.clientHeight + 'px';
    // console.dir(e.style);
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
    return (
      <div className="App-wrapper">
        <div
          className={
            this.state.sideNav ? 'App-content App-show-side-nav' : 'App-content'
          }
        >
          <SideNav toggleSideNav={this.toggleSideNav} />
          <Nav toggleSideNav={this.toggleSideNav} showInfo={this.showInfo} />
          <main
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
