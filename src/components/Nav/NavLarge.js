import React from 'react';
import NavLogo from './NavLogo';
import NavItem from './NavItem';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import styled from 'styled-components';
import './index.css';

const NavContainer = styled.nav`
  display: none;
  height: 80px;
  background-color: #50d7e3;
  @media (min-width: 992px) {
    display: block;
  }
`;

export default function NavLarge(props) {
  const styles = {
    logo: {
      float: 'left',
      marginRight: '20px'
    }
  };
  let acctLink = {
    text: 'sign in',
    to: '/sign-in'
  };
  const isAdmin =
    props.uid === 'tDHYraX5Iqes7WDq4Ne474qk30n1' ||
    props.uid === '8KRkYoGQnTTBbMbl0PYRdneUbqO2';
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
          <NavItem text="gallery" to="/gallery" />
          <NavItem text="about" to="/about" />
          {isAdmin && <NavItem text="admin" to="/admin" />}
        </ul>
      </Grid>
    </NavContainer>
  );
}
