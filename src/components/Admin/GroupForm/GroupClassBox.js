import React from 'react';
import { Button } from 'react-bootstrap';

export default function GroupClassBox(props) {
  const styles = {
    btn: {
      backgroundColor: props.active ? '#50af3d' : '#000000',
      color: '#ffffff',
      border: 'none',
      margin: '5px'
    }
  };
  return (
    <Button style={styles.btn} onClick={props.handleClick}>
      {props.text}
    </Button>
  );
}
