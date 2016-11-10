import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import ImagePanel from '../components/ImagePanel';
import cinnamonRolls from '../images/cinnamon-rolls.jpeg'
import chocPbCookies from '../images/choc-pb-cookies.jpeg'
import pumpkinChocChipMuffins from '../images/pumpkin-choc-chip-muffins.jpeg'

const style = {
  row: {
    width: '80%',
    margin: '30px auto'
  }
}

export default function HomeView(props) {
  return (
    <Grid>
      <Row style={style.row}>
        <ImagePanel title='Header'
          text='Description'
          src={cinnamonRolls} />
      </Row>
      <Row style={style.row}>
        <ImagePanel floatRight title='Header'
          text='Description'
          src={chocPbCookies} />
      </Row>
      <Row style={style.row}>
        <ImagePanel title='Header'
          text='Description'
          src={pumpkinChocChipMuffins} />
      </Row>
    </Grid>
  );
}
