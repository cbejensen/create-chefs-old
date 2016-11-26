import React from 'react';
import { Row, Col, Checkbox } from 'react-bootstrap'

class ClassBox extends React.Component {
  render() {
    return (
      <label className="ClassBox-container">
        <header className="ClassBox-header">
          <div className="ClassBox-checkbox-container">
            <input type="checkbox" />
          </div>
          <div className="ClassBox-date-container">
            <h3 className="ClassBox-date">{this.props.date}</h3>
            <span className="ClassBox-time">{this.props.time}</span>
          </div>
        </header>
        <div className="ClassBox-body">
          <div className="ClassBox-theme">
            <strong>{this.props.theme}</strong>
          </div>
          <ul>
            {this.props.food.map((food, i) => {
              return <li key={i}>{food}</li>
            })}
          </ul>
        </div>
      </label>
    )
  }
};

export default ClassBox;
