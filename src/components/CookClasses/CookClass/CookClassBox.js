import React from 'react';
import Header from './CookClassHeader';
import Body from './CookClassBodyContainer';
import styled from 'styled-components';

export default function CookClassBox(props) {
  const Container = styled.div`
    padding: 0 10px;
  `;
  const Box = styled.div`
    border-radius: 15px;
    margin: 10px auto;
    overflow: hidden;
    max-width: 500px;
  `;
  return (
    <Container>
      <Box>
        <Header date={props.date} startTime={props.start} endTime={props.end} />
        <Body id={props.id} theme={props.theme} lessons={props.lessons} />
      </Box>
    </Container>
  );
}
