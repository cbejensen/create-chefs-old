import React from 'react';
import { Header } from './components/Header';
import { Grid, Row, Col } from 'react-bootstrap';
import createLogo from './images/create-logo.png';
import './App.css'

class App extends React.Component {
  render() {
    return (
      <div>
        <Grid fluid>
          <Row className="App-create-row">
            <Col xs={12}>
              <div className="App-create-img-container">
                <img src={createLogo} alt="CREATE"/>
              </div>
            </Col>
          </Row>
        </Grid>
        <Header />
        <div className="main">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
