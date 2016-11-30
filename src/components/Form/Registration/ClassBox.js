import React from 'react';
import { Row, Col, Checkbox } from 'react-bootstrap';
import moment from 'moment';
import './index.css';

class ClassBox extends React.Component {
  render() {
    const date = moment(this.props.item.date).format("dddd, MMMM Do");
    // const timeStart = moment(this.props.item.start).format("ha");
    // const timeEnd = moment(this.props.item.end).format("ha");
    // const time = timeStart + " - " + timeEnd;
    return (
      <label className="ClassBox-container">
        <header className="ClassBox-header">
          <div className="ClassBox-checkbox-container">
            <input type="checkbox" />
          </div>
          <div className="ClassBox-date-container">
            <h3 className="ClassBox-date">{date}</h3>
            <span className="ClassBox-time">1-3pm</span>
          </div>
        </header>
        <div className="ClassBox-body">
          <div className="ClassBox-theme">
            <strong>{this.props.item.theme}</strong>
          </div>
          <ul className="ClassBox-lessons">
            {this.props.item.lessons.map((lesson, i) => {
              return <li key={i}>{lesson}</li>
            })}
          </ul>
        </div>
      </label>
    )
  }
};

export default ClassBox;

/*

Friday, Dec 2, 1-3pm:
"Snowman Week"
Snowman Kabobs
Sweet Snowman Dip
Snowman Chili

Monday, Dec 5, and Thursday, December 8:
"Christmas Spirit Week"
Holly Wreaths
Veggie Tray arranging
Festive Tortilla Pinwheels
Toffee & Drizzled Chocolate Pretzels

Friday, Dec 9, 1-3pm:
"Christmas Spirit Week"
Holly Wreaths
Veggie Tray arranging
Festive Tortilla Pinwheels
Toffee & Drizzled Chocolate Pretzels

Monday, Dec 12 and Thursday, December 15:
"Party Food Week", parents invited at the end of class!
Sausage Rye Appetizers
Holiday Cheeseball and Crackers
Cream Cheese Dip
Buffet Set-up Lesson
*/
