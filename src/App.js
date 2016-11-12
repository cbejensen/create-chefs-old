import React from 'react';
import { Header } from './components/Header';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
