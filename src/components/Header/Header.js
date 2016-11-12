import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/chef-logo.png';
import './Header.css'

export default function Header(props) {
  return (
    <Navbar collapseOnSelect>
      <Navbar.Header>
        <a href="/">
          <Navbar.Brand>
            <img src={logo} alt="crEATe chefs"/>
          </Navbar.Brand>
        </a>
        <Navbar.Toggle className="Navbar-toggle"/>
      </Navbar.Header>
      <Navbar.Collapse>
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
      </Navbar.Collapse>
    </Navbar>
  );
}
