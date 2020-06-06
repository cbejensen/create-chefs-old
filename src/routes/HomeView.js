import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { ImagePanel } from '../components/ImagePanel'
import ContactButtonContainer from '../components/ContactButtonContainer'
import CheckAuth from 'components/CheckAuth'
import logoCreate from 'images/logo-create.png'
import bostonStir from 'images/2016-11-10/boston-stir.jpg'
import lemonJuicingHand from 'images/2016-11-10/lemon-juicing-hand.jpg'
import scoopChoc from 'images/2017-11-4/kid-scooping-cookie-dough.jpg'
import pumpkinChocChipMuffins from 'images/2017-11-4/pumpkin-choc-chip-muffins-in-pan.jpg'
import foodVid from 'images/after-school-snacks.mp4'
import './index.css'

export default function HomeView(props) {
  return (
    <div className="HomeView-container">
      <div className="HomeView-banner-container">
        <div className="HomeView-banner-text">
          <figure>
            <img src={logoCreate} alt="CREATE" />
            <figcaption>
              <span>Cooking Classes</span>
            </figcaption>
          </figure>
          <ContactButtonContainer text="Contact Us Today!"></ContactButtonContainer>
        </div>
      </div>
      <div className="HomeView-body-container">
        <Grid className="HomeView-body">
          <Row className="HomeView-row">
            <ImagePanel heading="learn" src={bostonStir}>
              CrEATe cooking classes are specifically designed to inspire
              children ages 4 and up.
              <ul>
                <li>measuring & mixing</li>
                <li>following recipes</li>
                <li>safe cutting</li>
                <li>baking and cooking techniques</li>
                <li>veggie approval :-)</li>
                <li>meal timing</li>
                <li>taste testing!</li>
              </ul>
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight heading="laugh" src={lemonJuicingHand}>
              We love to have fun while we learn, and so do our little chefs!
              With silly yet memorable lessons, we learn what NOT to do in the
              kitchen as much as the wonderful things we can do!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel heading="live" src={scoopChoc}>
              Take care of yourself while we take care of the rest. Your budding
              chefs will be proud to bring home a sampling of what they've
              created as they develop this SKILL FOR LIFE!
            </ImagePanel>
          </Row>
          <Row className="HomeView-row">
            <ImagePanel imgRight src={pumpkinChocChipMuffins}>
              <CheckAuth>
                <RegLink />
              </CheckAuth>
            </ImagePanel>
          </Row>
          <Row>
            <ContactButtonContainer text="Contact Us for More Details!"></ContactButtonContainer>
          </Row>
          <Row>
            <Col className="HomeView-video-title">
              <h1>After School Snacks</h1>
              <p>
                See <a href="/classes">classes</a> for details
              </p>
            </Col>
          </Row>
          <Row className="HomeView-video">
            <video controls src={foodVid}></video>
          </Row>
        </Grid>
      </div>
    </div>
  )
}

function RegLink(props) {
  const link = props.uid ? '/classes' : '/sign-in'
  return (
    <Link className="HomeView-register-link" id="home-register-btn" to={link}>
      <div className="HomeView-register-btn">Click here to register!</div>
    </Link>
  )
}
