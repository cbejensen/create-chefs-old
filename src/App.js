import React from 'react';
import { Nav } from './components/Nav';
import { Grid, Row, Col } from 'react-bootstrap';
import createLogo from './images/logo-create.png';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
