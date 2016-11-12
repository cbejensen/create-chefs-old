import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ImagePanel } from '../components/ImagePanel';
import createLogo from '../images/create-logo.png';
import cinnamonRolls from '../images/cinnamon-rolls.jpeg';
import chocPbCookies from '../images/choc-pb-cookies.jpeg';
import pumpkinChocChipMuffins from '../images/pumpkin-choc-chip-muffins.jpeg';
import './index.css';

export default function HomeView(props) {
  return (
    <Grid fluid className="HomeView-container">
      <Row className="HomeView-row">
        <Col xs={12} className="HomeView-header">
          <img src={createLogo} alt="CREATE"/>
        </Col>
      </Row>
      <ImagePanel heading='What?' src={cinnamonRolls} className="HomeView-row">
        We'll have a fun little activity, learn cooking & baking tips, and each student will take home a sampling of all items made!
      </ImagePanel>
      <ImagePanel imgRight heading='When?' src={cinnamonRolls} className="HomeView-row">
        Mondays & Thursdays from 4-5 PM.
        Fridays from 1-2 PM.
      </ImagePanel>
      <ImagePanel heading='Who?' src={chocPbCookies} className="HomeView-row">
        Anyobdy who is interested in cooking and loves delicious food!
      </ImagePanel>
      <ImagePanel imgRight heading='Where?' src={pumpkinChocChipMuffins} className="HomeView-row">
        Taylorsville, UT
      </ImagePanel>
      <ImagePanel heading='How?' src={pumpkinChocChipMuffins} className="HomeView-row">
        Click here to register!
      </ImagePanel>
    </Grid>
  );
}
