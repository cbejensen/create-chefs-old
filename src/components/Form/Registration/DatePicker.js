import React from 'react';
import RegistrationInputGroup from './RegistrationInputGroup';
import { Row, Col, FormGroup, Checkbox } from 'react-bootstrap';
import './index.css';

class DatePicker extends React.Component {
  render() {
    return (
      <RegistrationInputGroup heading="Select dates of classes to attend">
        <Row className="DatePicker-container">
          {this.props.dates.map((date, i) => {
            return (
              <Col xs={4} sm={3}
                key={i} className="DatePicker-date-container-outer">
                <label className="DatePicker-date-container-inner">
                  <div className="DatePicker-checkbox-container">
                    <input type="checkbox"/>
                  </div>
                  <div className="DatePicker-info-container">
                    <div className="h5">{date.day}</div>
                    <small>{date.time}</small>
                  </div>
                </label>
              </Col>
            )
          })}
        </Row>
      </RegistrationInputGroup>
    )
  }
};

export default DatePicker;
