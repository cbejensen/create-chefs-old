import React from 'react';
import CheckAuth from 'components/CheckAuth';
import ChildList from './ChildListWrapper';
import RegisteredChildren from 'components/Admin/RegisteredChildren';
import { Glyphicon } from 'react-bootstrap';

export default function CookClassBody(props) {
  const styles = {
    container: {
      color: '#000000',
      padding: '10px 15px 0',
      transition: '1s'
    },
    header: {
      display: props.heading || props.headingRight
        ? 'flex'
        : 'none',
      fontWeight: 'bold',
      fontSize: '1.3em'
    },
    heading: {
      flex: '3',
      textTransform: 'uppercase',
      borderLeft: props.heading
        ? '1px solid #9d9d9d'
        : 'initial',
      paddingLeft: '10px'
    },
    headingRight: {
      flex: '1',
      textAlign: 'right',
      color: props.color
    },
    headingRightInner: {
      padding: '0 5px'
    },
    description: {
      fontFamily:
        'Helvetica Neue, Helvetica, Arial, sans-serif',
      margin: '5px 0',
      fontSize: '1.2em'
    },
    lessons: {
      margin: '5px 0'
    },
    reg: {
      textAlign: 'right',
      fontSize: '1.3em'
    },
    regInner: {
      marginRight: '-15px',
      color: '#ffffff',
      padding: props.seeChildList
        ? '5px 50px 5px 10px'
        : '5px 20px 5px 10px',
      backgroundColor: props.color,
      borderRadius: props.seeChildList
        ? '10px 0 0 10px'
        : '10px 0 0 0',
      transition: '.3s',
      cursor: 'pointer'
    },
    chevron: {
      transition: '.3s',
      transform: props.seeChildList
        ? 'rotate(90deg)'
        : 'initial'
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        {props.heading &&
          <div style={styles.heading}>{props.heading}</div>}
        <div style={styles.headingRight}>
          <span style={styles.headingRightInner}>
            {props.headingRight}
          </span>
        </div>
      </div>
      <p style={styles.description}>{props.description}</p>
      <ul style={styles.lessons}>
        {props.lessons &&
          Object.keys(props.lessons).map(key =>
            <li key={key}>{props.lessons[key]}</li>
          )}
      </ul>
      <div style={styles.reg}>
        <span
          style={styles.regInner}
          onClick={props.showChildList}
        >
          {props.isAdmin ? 'Registered' : 'Register'}
          {' '}
          <Glyphicon
            style={styles.chevron}
            glyph="chevron-right"
          />
        </span>
      </div>
      {props.seeChildList &&
        <CheckAuth noPass>
          {props.isAdmin
            ? <RegisteredChildren
                registered={props.registered}
              />
            : <ChildList
                classId={props.id}
                isGroup={props.isGroup}
              />}
        </CheckAuth>}
    </div>
  );
}
