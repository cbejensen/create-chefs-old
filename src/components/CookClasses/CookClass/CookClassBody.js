import React from 'react';
import styled from 'styled-components';
import CheckAuth from 'components/CheckAuth';
import ChildList from './ChildListWrapper';

export default function CookClassBody(props) {
  const styles = {
    container: {
      backgroundColor: '#69D6E3',
      color: '#000000',
      padding: '15px',
      fontSize: '1.2em',
      transition: '1s',
    },
    list: {
      margin: '10px 0 0 0',
    },
  };
  const Reg = styled.span`
    color: #FFDD4A;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <div style={styles.container}>
      <strong>{props.theme}</strong>
      <ul style={styles.list}>
        {props.lessons &&
          Object.keys(props.lessons).map(key => (
            <li key={key}>{props.lessons[key]}</li>
          ))}
      </ul>
      <div style={{textAlign: 'right'}}>
        <Reg onClick={props.showChildList}>Register</Reg>
      </div>
      {props.seeChildList &&
        <CheckAuth>
          <ChildList classId={props.id} />
        </CheckAuth>}
    </div>
  );
}
