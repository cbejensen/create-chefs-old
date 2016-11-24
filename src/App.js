import React from 'react';
import { Nav } from './components/Nav';
import { Footer } from './components/Footer';
import './index.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

export default App;
