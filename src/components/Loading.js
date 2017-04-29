import React from 'react';

export default function Loading(props) {
  const styles = {
    fontSize: '2em',
    textAlign: 'center',
  };
  return <div style={{...styles, ...props.style}}>Loading...</div>;
}
