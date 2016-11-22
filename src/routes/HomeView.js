import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ImagePanel } from '../components/ImagePanel';
import logoCreate from '../images/logo-create.png';
import ingredientsLeft from '../images/ingredients1.png';
import ingredientsRight from '../images/ingredients2.png';
import cinnamonRolls from '../images/cinnamon-rolls.jpeg';
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
    <Grid fluid className="HomeView-container">
      <Row className="HomeView-header-container">
        <Col xs={12} sm={3}
          style={style.headerLeft}
          className="HomeView-header-img">
        </Col>
        <Col xs={12} sm={6}>
          <figure>
            <img src={logoCreate} alt="CREATE"/>
            <figcaption>Cooking Classes</figcaption>
          </figure>
        </Col>
        <Col xs={12} sm={3}
          style={style.headerRight}
          className="HomeView-header-img">
        </Col>
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
