import React from 'react';
import {Row, Col, Badge} from 'react-bootstrap';

class AddOrSubtract extends React.Component {
  render() {
    return (
      <div className="AddOrSubtract-container">
        <Row>
          <Col
            xs={6}
            className="AddOrSubtract-col add"
            onClick={this.props.add}
          >
            <Badge className="AddOrSubtract-badge add">+</Badge>
            {this.props.addText}
          </Col>
          <Col
            xs={6}
            className="AddOrSubtract-col subtract"
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
