import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../images/chef-logo.png';
import './Header.css'

export default function Header(props) {
  return (
    <Navbar className="Navbar-container">
      <Navbar.Header>
        <a href="/">
          <Navbar.Brand>
            <img src={logo} alt="crEATe chefs"/>
          </Navbar.Brand>
        </a>
      </Navbar.Header>
      <Nav>
        <LinkContainer to='/register'>
          <NavItem className="NavItem">Register</NavItem>
        </LinkContainer>
      </Nav>
      <Nav>
        <LinkContainer to='/about'>
          <NavItem className="NavItem">About</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
  );
}
