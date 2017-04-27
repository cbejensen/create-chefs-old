import React from 'react';
import {SideNavStyle} from './SideNavItem';
import styled from 'styled-components';
import {browserHistory} from 'react-router';

export const NavStyle = styled(SideNavStyle)`
  width: inherit;
  text-align: inherit;
  float: left;
  line-height: 80px;
  margin: 0 20px;
`;
export default function NavItem(props) {
  return (
    <NavStyle>
      <span onClick={() => browserHistory.push(props.to)}>
        {props.text}
      </span>
    </NavStyle>
  );
}
