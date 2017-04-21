import React from 'react';
import styled from 'styled-components';

export default function InputGroupHeading(props) {
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
  const button = (
    <TopRight onClick={props.handleCommandClick}>
      {props.commandText}
    </TopRight>
  );
  return (
    <div style={{position: 'relative'}}>
      <header className="InputGroupHeading">
        <div>
          <em className="h4">{props.heading}</em>
        </div>
        <hr />
        <small><em>{props.subHeading}</em></small>
        {props.children}
      </header>
      {props.commandText && button}
    </div>
  );
}
