import React from 'react';
import NavLogo from './NavLogo';
import {Grid, Row, Col, Glyphicon} from 'react-bootstrap';
import logo from '../../images/logo-chef.png';
import styled from 'styled-components';
import './index.css';

const NavContainer = styled.nav`
  height: 80px;
  background-color: #50D7E3;
  @media (min-width: 992px) {
    display: none;
  }
`;

export default function Nav(props) {
  return (
    <NavContainer>
      <Grid>
        <Row className="Nav-row">
          <Col xs={3} className="Nav-icon Nav-icon-left">
            <Glyphicon
              glyph="menu-hamburger"
              className="NavIcon-glyph"
              onClick={props.toggleSideNav}
            />
          </Col>
          <Col xs={6} style={{textAlign: 'center'}}>
            <NavLogo to="/" img={logo} alt="CREATE" />
          </Col>
          <Col xs={3} className="Nav-icon Nav-icon-right">
            <Glyphicon
              glyph="info-sign"
              className="NavIcon-glyph"
              onClick={props.showInfo}
            />
          </Col>
        </Row>
      </Grid>
    </NavContainer>
  );
}
