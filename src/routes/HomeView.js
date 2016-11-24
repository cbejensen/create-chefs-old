import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ImagePanel } from '../components/ImagePanel';
import logoCreate from '../images/logo-create.png';
import ingredientsLeft from '../images/ingredients1.png';
import ingredientsRight from '../images/ingredients2.png';
import bostonStir from '../images/2016-11-10/boston-stir.jpg';
import lemonJuicingHand from '../images/2016-11-10/lemon-juicing-hand.jpg';
import saltPour from '../images/2016-11-10/salt-pour.jpg';
import scoopChoc from '../images/2016-11-10/scoop-choc.jpg';
import pumpkinChocChipMuffins from '../images/pumpkin-choc-chip-muffins.jpeg';
import './index.css';

export default function HomeView(props) {
  const style = {
    headerLeft: {
      backgroundImage: 'url(' + ingredientsLeft + ')'
    },
    headerRight: {
      backgroundImage: 'url(' + ingredientsRight + ')'
    }
  }
  return (
    <div className="HomeView-container">
      <Grid fluid>
        <Row className="HomeView-banner-container">
          <Col xs={12} sm={3}
            style={style.headerLeft}
            className="HomeView-banner-img">
          </Col>
          <Col xs={12} sm={6} className="HomeView-banner-text">
            <figure>
              <img src={logoCreate} alt="CREATE"/>
              <figcaption><span>Cooking Classes</span></figcaption>
            </figure>
          </Col>
          <Col xs={12} sm={3}
            style={style.headerRight}
            className="HomeView-banner-img">
          </Col>
        </Row>
      </Grid>
      <div className="HomeView-body-container">
        <Grid className="HomeView-body">
          <Row className="HomeView-row">
            <ImagePanel heading='What?' src={bostonStir} >
              We'll have a fun little activity, learn cooking & baking tips, and each student will take home a sampling of all items made!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight heading='When?' src={lemonJuicingHand} >
              Mondays & Thursdays from 4-5 PM.
              Fridays from 1-2 PM.
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel heading='Who?' src={saltPour} >
              Anyobdy who is interested in cooking and loves delicious food!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight heading='Where?' src={scoopChoc} >
              Taylorsville, UT
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel heading='How?' src={pumpkinChocChipMuffins} >
              Click here to register!
            </ImagePanel>
          </Row>
        </Grid>
      </div>
    </div>
  );
}
