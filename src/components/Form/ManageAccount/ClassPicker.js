import React from 'react';
import InputGroupHeading from './InputGroupHeading';
import ClassBox from './ClassBox';
import {Row, Col} from 'react-bootstrap';
import * as firebase from 'firebase';
import './index.css';

class ClassPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: [],
    };
  }
  componentDidMount() {
    firebase
      .database()
      .ref('classes')
      .once('value')
      .then(snap => {
        this.setState({
          classes: snap.val(),
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <section>
        <InputGroupHeading heading="Select classes to attend" />
        <Row className="ClassPicker-container">
          {this.state.classes.map((item, i) => {
            return (
              <Col sm={6} md={4} key={i}>
                <ClassBox
                  item={item}
                  index={i}
                  handleClick={this.props.handleClick}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    );
  }
}

export default ClassPicker;
