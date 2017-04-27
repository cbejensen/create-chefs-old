import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

export default function ClassBoxHeader(props) {
  const date = moment(props.date).format('dddd, MMMM Do');
  const startTime = moment(props.startTime, 'hh:mm').format('h:mma');
  const endTime = moment(props.endTime, 'hh:mm').format('h:mma');
  const time = startTime + ' - ' + endTime;
  const Header = styled.header`
    background-color: #E10C18;
    color: #ffffff;
    padding: 15px;
  `;
  const Heading = styled.h2`
    margin-top: 0;
  `;
  const Time = styled.span`
    font-size: 1.5em;
  `;
  return (
    <Header>
      <Heading>{date}</Heading>
      <Time>{time}</Time>
    </Header>
  );
}
