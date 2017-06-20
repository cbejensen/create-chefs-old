import React from 'react';
import {Panel} from 'react-bootstrap';
import Item from './Item';
import Kid from './Kid';
import moment from 'moment';
import {FirebaseListener} from 'components/FirebaseCustom';

export default function Reg(props) {
  const date = moment(props.date).format('dddd, MMMM Do');
  const header = <h1>{date}</h1>;
  const start = moment(props.start, 'hh:mm').format('h:mma');
  const end = moment(props.end, 'hh:mm').format('h:mma');
  const time = start + ' - ' + end;
  return (
    <Panel header={header} bsStyle="primary" eventKey={props.eventKey}>
      <Item text="Time: ">{time}</Item>
      <Item text="Theme: ">{props.theme}</Item>
      <Item text="Food: ">
        {props.lessons.map((lesson, i) => <span key={i}>{lesson}, </span>)}
      </Item>
      <div style={{marginBottom: '10px'}} />
      <Item text="Kids">
        {props.registered
          ? props.registered.map(childId => (
              <FirebaseListener
                key={childId}
                path={`children/${childId}`}
                passDataAs="kid"
              >
                <Kid />
              </FirebaseListener>
            ))
          : <div style={{marginLeft: '20px'}}>Nobody registered yet!</div>}
      </Item>
    </Panel>
  );
}
