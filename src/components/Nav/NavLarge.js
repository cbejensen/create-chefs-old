import React from 'react';
import NavLogo from './NavLogo';
import NavItem from './NavItem';
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import styled from 'styled-components';
import './index.css';

const NavContainer = styled.nav`
  display: none;
  height: 80px;
  background-color: #50D7E3;
  @media (min-width: 992px) {
    display: block;
  }
`;

export default function NavLarge(props) {
  const styles = {
    logo: {
      float: 'left',
      marginRight: '20px',
    },
  };
  let acctLink = {
    text: 'sign in',
    to: '/sign-in',
  };
  if (props.uid) {
    acctLink.text = 'my account';
    acctLink.to = '/my-account';
  }
  return (
    <NavContainer>
      <Grid>
        <NavLogo style={styles.logo} />
        <ul>
          <NavItem text="home" to="/" />
          <NavItem text="classes" to="/classes" />
          <NavItem {...acctLink} />
          <NavItem text="blog" to="/blog/p/1" />
          <NavItem text="about" to="/about" />
        </ul>
      </Grid>
    </NavContainer>
  );
}
