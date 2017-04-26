import React from 'react';
import Header from './CookClassHeader';
import Body from './CookClassBodyContainer';

export default function CookClassBox(props) {
  const styles = {
    container: {
      padding: '0 10px',
    },
    box: {
      borderRadius: '15px',
      margin: '10px auto',
      overflow: 'hidden',
      maxWidth: '500px',
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <Header date={props.date} startTime={props.start} endTime={props.end} />
        <Body id={props.id} theme={props.theme} lessons={props.lessons} />
      </div>
    </div>
  );
}
