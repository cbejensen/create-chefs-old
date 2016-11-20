import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ImagePanel } from '../components/ImagePanel';
import logoCreate from '../images/logo-create.png';
import cinnamonRolls from '../images/cinnamon-rolls.jpeg';
import pumpkinChocChipMuffins from '../images/pumpkin-choc-chip-muffins.jpeg';
import './index.css';

export default function HomeView(props) {
  return (
    <Grid fluid className="HomeView-container">
      <Row className="HomeView-header">
        <Col xs={12}><img src={logoCreate} alt="CREATE"/></Col>
      </Row>
      <Row className="HomeView-row">
        <ImagePanel heading='What?' src={cinnamonRolls} >
          We'll have a fun little activity, learn cooking & baking tips, and each student will take home a sampling of all items made!
        </ImagePanel>
      </Row>
      <Row className="HomeView-row">
        <ImagePanel imgRight heading='When?' src={pumpkinChocChipMuffins} >
          Mondays & Thursdays from 4-5 PM.
          Fridays from 1-2 PM.
        </ImagePanel>
      </Row>
      <Row className="HomeView-row">
        <ImagePanel heading='Who?' src={cinnamonRolls} >
          Anyobdy who is interested in cooking and loves delicious food!
        </ImagePanel>
      </Row>
      <Row className="HomeView-row">
        <ImagePanel imgRight heading='Where?' src={pumpkinChocChipMuffins} >
          Taylorsville, UT
        </ImagePanel>
      </Row>
      <Row className="HomeView-row">
        <ImagePanel heading='How?' src={cinnamonRolls} >
          Click here to register!
        </ImagePanel>
      </Row>
    </Grid>
  );
}
