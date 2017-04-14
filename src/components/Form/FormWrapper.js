import React from 'react';
import {Grid} from 'react-bootstrap';
import BackButton from 'components/BackButton';

export default function FormWrapper(props) {
  console.log(props);
  const styles = {
    container: {
      backgroundColor: '#FFF1D6',
      height: '100%',
      position: 'relative',
      paddingTop: '10px',
    },
    title: {
      textAlign: 'center',
      marginTop: '0',
      paddingTop: '10px',
    },
  };
  const btn = props.backBtnText
    ? <BackButton text={props.backBtnText} handleClick={props.handleClick} />
    : null;
  return (
    <div style={styles.container}>
      <Grid>
        {btn}
        <h2 style={styles.title}>{props.title}</h2>
        {props.children}
      </Grid>
    </div>
  );
}
