import React from 'react';
import InputGroupHeading from './InputGroupHeading';
import ClassBox from './ClassBox';
import { Row, Col, FormGroup, Checkbox } from 'react-bootstrap';
import { getClasses } from '../../../utils/firebaseHelpers';
import './index.css';

class ClassPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: []
    }
  }
  componentDidMount() {
    getClasses().then(res => {
      this.setState({
        classes: res
      })
    }, err => {
      console.log(err);
    })
  }
  render() {
    return (
      <section>
        <InputGroupHeading heading="Select classes to attend" />
        <Row className="ClassPicker-container">
          {this.state.classes.map((item, i) => {
              return (
                <Col sm={6} md={4} key={i}>
                  <ClassBox item={item} />
                </Col>
              )
            })}
        </Row>
      </section>
    )
  }
};

export default ClassPicker;
