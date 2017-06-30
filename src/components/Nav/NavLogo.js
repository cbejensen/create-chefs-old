import React from 'react';
import { browserHistory } from 'react-router';
import logo from 'images/logo-chef.png';
import './index.css';

export default function NavLogo(props) {
  const styles = {
    cursor: 'pointer',
    height: '100%',
    padding: '5px 0'
  };
  return (
    <img
      style={{ ...styles, ...props.style }}
      src={logo}
      alt="CREATE"
      onClick={() => browserHistory.push('/')}
    />
  );
}
