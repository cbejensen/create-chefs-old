import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
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
            <ImagePanel heading='learn' src={bostonStir} >
              CrEATe cooking classes are specifically designed to inspire children ages 8 - 12 with a love for cooking.
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight heading='laugh' src={lemonJuicingHand} >
              We love to have fun while we learn, and so do our little chefs!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel heading='relax' src={scoopChoc} >
              Take care of yourself while we take care of the rest. Who knows? Maybe you'll enjoy this more than them!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight src={pumpkinChocChipMuffins} >
              <div className="HomeView-image-panel-link">
                <Link to="/register">Click here to register!</Link>
              </div>
            </ImagePanel>
          </Row>
        </Grid>
      </div>
    </div>
  );
}
