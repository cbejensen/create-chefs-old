import React from 'react';
import {Row, Col, Badge} from 'react-bootstrap';
import './index.css';

class AddOrSubtract extends React.Component {
  render() {
    return (
      <div className="AddOrSubtract-container">
        <Row>
          <Col xs={6} className="AddOrSubtract-col" onClick={this.props.add}>
            <Badge className="AddOrSubtract-badge add">+</Badge>
            {this.props.addText}
          </Col>
          <Col
            xs={6}
            className="AddOrSubtract-col"
            onClick={this.props.subtract}
          >
            <Badge className="AddOrSubtract-badge subtract">-</Badge>
            {this.props.subtractText}
          </Col>
        </Row>
      </div>
    );
  }
}

export default AddOrSubtract;
