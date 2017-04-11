import React from 'react';

export default function FormWrapper(props) {
  const styles = {
    container: {
      backgroundColor: '#FFF1D6',
      height: '100%',
    },
    title: {
      textAlign: 'center',
      marginTop: '0',
      paddingTop: '10px',
    },
  };
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{props.title}</h2>
      {props.children}
    </div>
  );
}
