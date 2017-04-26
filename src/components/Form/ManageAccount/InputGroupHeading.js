import React from 'react';
import styled from 'styled-components';

export default function InputGroupHeading(props) {
  const Container = styled.div`
    margin-top: 20px;
    position: relative;
  `;
  const TopRight = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    cursor: pointer;
    &:hover {
      font-weight: bolder;
    }
  `;
  const Line = styled.hr`
    margin-top: 5px;
    margin-bottom: ${props.subHeading ? '0px' : '5px'};
    background-color: #303030;
    color: #303030;
    height: 1px;
    border: none;
  `;
  const button = (
    <TopRight onClick={props.handleCommandClick}>
      {props.commandText}
    </TopRight>
  );
  return (
    <Container>
      <header className="InputGroupHeading">
        <div>
          <em className="h4">{props.heading}</em>
        </div>
        <Line />
        <small><em>{props.subHeading}</em></small>
        {props.children}
      </header>
      {props.commandText && button}
    </Container>
  );
}
