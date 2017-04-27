import React from 'react';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

export const SideNavStyle = styled.li`
  height: 50px;
  line-height: 50px;
  font-size: 2em;
  list-style: none;
  display: inline-block;
  width: 100%;
  color: rgba(255, 255, 255, 0.75);
  text-align: center;
  text-decoration: none;
  transition: .4s;
  cursor: pointer;
  &:hover {
    color: rgba(255, 255, 255, 0.95);
  }
`;

export default function SideNavItem(props) {
  return (
    <SideNavStyle>
      <div onClick={() => browserHistory.push(props.to)}>
        {props.text}
      </div>
    </SideNavStyle>
  );
}
