import React from 'react';
import NavImg from './NavImg';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';
import logo from '../../images/logo-chef.png';
import './index.css';

export default function Nav(props) {
  return (
    <nav className="Nav-container">
      <Grid>
        <Row className="Nav-row">
          {/* <Col xs={2}><Link to="/schedule">Schedule</Link></Col>
          <Col xs={2}><Link to="/register">Register</Link></Col> */}
          <Col xs={3} className="Nav-icon Nav-icon-left"
            onClick={props.toggleSideNav}>
            <Glyphicon glyph="menu-hamburger"
              className="NavIcon-glyph"/>
          </Col>
          <Col xs={6}><NavImg to="/" img={logo} alt="CREATE" /></Col>
          <Col xs={3} className="Nav-icon Nav-icon-right">
            <Glyphicon glyph="user"
              className="NavIcon-glyph"/>
          </Col>
          {/* <Col xs={2}><Link to="/parties">Parties</Link></Col>
          <Col xs={2}><Link to="/about">About</Link></Col> */}
        </Row>
      </Grid>
    </nav>
  );
}
