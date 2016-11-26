import React from 'react';
import InputGroupHeading from './InputGroupHeading';
import ClassBox from './ClassBox';
import { Row, Col, FormGroup, Checkbox } from 'react-bootstrap';
import './index.css';

class ClassPicker extends React.Component {
  render() {
    return (
      <section>
        <InputGroupHeading heading="Select classes to attend" />
        <Row className="ClassPicker-container">
          {/* {this.props.classes.map((class, i) => {
            return (
              <Col xs={4} sm={3}
                key={i} className="ClassPicker-class-container-outer">
                <label className="ClassPicker-class-container-inner">
                  <div className="ClassPicker-checkbox-container">
                    <input type="checkbox"/>
                  </div>
                  <div className="ClassPicker-info-container">
                    <div className="h5">{class.day}</div>
                    <small>{class.time}</small>
                  </div>
                </label>
              </Col>
            )
          })} */}
          {this.props.classes.map((item, i) => {
              return (
                <Col md={6} lg={4}>
                  <ClassBox date={item.date}
                    time={item.time}
                    theme={item.theme}
                    food={item.food}
                    key={i}/>
                </Col>
              )
            })}
        </Row>
      </section>
    )
  }
};

export default ClassPicker;
