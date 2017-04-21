import React from 'react';
import styled from 'styled-components';
import CheckAuth from 'components/CheckAuth';
import ChildList from './ChildListWrapper';

export default function ClassBoxBody(props) {
  const Container = styled.div`
    background-color: #2D5D7B;
    color: #f4f4f4;
    padding: 15px;
    font-size: 1.2em;
    transition: 1s;
  `;
  const List = styled.ul`
    margin: 10px 0 0 0;
  `;
  const Reg = styled.span`
    color: #FFDD4A;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  `;
  return (
    <Container>
      <strong>{props.theme}</strong>
      <List>
        {props.lessons &&
          Object.keys(props.lessons).map(key => (
            <li key={key}>{props.lessons[key]}</li>
          ))}
      </List>
      <div style={{textAlign: 'right'}}>
        <Reg onClick={props.showChildList}>Register</Reg>
      </div>
      {props.seeChildList &&
        <CheckAuth>
          <ChildList classId={props.id} />
        </CheckAuth>}
    </Container>
  );
}
