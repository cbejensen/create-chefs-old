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
          <Col xs={3} className="Nav-icon Nav-icon-left">
            <Glyphicon glyph="menu-hamburger"
              className="NavIcon-glyph"
              onClick={props.toggleSideNav} />
          </Col>
          <Col xs={6}><NavImg to="/" img={logo} alt="CREATE" /></Col>
          <Col xs={3} className="Nav-icon Nav-icon-right">
            <Glyphicon glyph="info-sign"
              className="NavIcon-glyph"
              onClick={props.showInfo} />
          </Col>
        </Row>
      </Grid>
    </nav>
  );
}
