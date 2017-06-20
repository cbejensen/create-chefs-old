import React from 'react';
import RegisteredChild from './RegisteredChild';

export default function RegisteredChildren(props) {
  const styles = {
    noChildren: {
      textAlign: 'center',
      padding: '20px',
      fontSize: '1.2em'
    }
  };
  let childArray;
  if (props.registered) {
    childArray = Object.keys(props.registered).map(id =>
      <RegisteredChild key={id} id={id} />
    );
  } else {
    childArray = false;
  }
  return (
    <div>
      {childArray ||
        <div style={styles.noChildren}>
          Sorry, nobody has registered yet!
        </div>}
    </div>
  );
}
