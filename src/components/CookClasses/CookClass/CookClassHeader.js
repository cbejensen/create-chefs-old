import React from 'react';
import { Link } from 'react-router';
import moment from 'moment';
import styled from 'styled-components';

export default function ClassBoxHeader(props) {
  const editPath = props.isGroup
    ? `/admin/class-groups/${props.id}`
    : `/admin/classes/${props.id}`;
  const Header = styled.header`
    background-color: ${props.color};
    color: #ffffff;
    padding: 15px;
    position: relative;
  `;
  const Title = styled.h2`
    margin: 0 0 5px 0;
  `;
  const Subtitle = styled.span`
    font-size: 1.1em;
  `;
  const AdminEdit = styled.span`
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: .9em;
  `;
  return (
    <Header>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
      {props.isAdmin &&
        <AdminEdit>
          <Link style={{ color: 'white' }} to={editPath}>
            Edit
          </Link>
        </AdminEdit>}
    </Header>
  );
}
