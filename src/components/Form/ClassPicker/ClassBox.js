import React from 'react';
import moment from 'moment';
import './index.css';

export default function ClassBox(props) {
  const date = moment(props.item.date).format('dddd, MMMM Do');
  const timeStart = moment(props.item.start, 'hh:mm').format('h:mma');
  const timeEnd = moment(props.item.end, 'hh:mm').format('h:mma');
  const time = timeStart + ' - ' + timeEnd;
  return (
    <label className="ClassBox-container">
      <header className="ClassBox-header">
        <div className="ClassBox-checkbox-container">
          <input
            type="checkbox"
            onClick={props.handleClick.bind(null, props.item.id)}
          />
        </div>
        <div className="ClassBox-date-container">
          <h3 className="ClassBox-date">{date}</h3>
          <span className="ClassBox-time">{time}</span>
        </div>
      </header>
      <div className="ClassBox-body">
        <div className="ClassBox-theme">
          <strong>{props.item.theme}</strong>
        </div>
        <ul className="ClassBox-lessons">
          {props.item.lessons &&
            props.item.lessons.map((lesson, i) => {
              return <li key={i}>{lesson}</li>;
            })}
        </ul>
      </div>
    </label>
  );
}
