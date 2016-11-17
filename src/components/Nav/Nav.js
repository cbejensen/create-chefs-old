import React from 'react';
import NavImage from './NavImage';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import logo from '../../images/logo-chef.png';
import './index.css';

export default function Nav(props) {
  return (
    <nav className="Nav-container">
      <Grid>
        <Row className="Nav-row">
          <Col xs={2}><Link to="/schedule">Schedule</Link></Col>
          <Col xs={2}><Link to="/register">Register</Link></Col>
          <Col xs={4}><NavImage to="/" img={logo} alt="CREATE" /></Col>
          <Col xs={2}><Link to="/parties">Parties</Link></Col>
          <Col xs={2}><Link to="/about">About</Link></Col>
        </Row>
      </Grid>
    </nav>
  );
}
