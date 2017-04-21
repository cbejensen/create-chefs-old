import React from 'react';

export default function CheckListItem(props) {
  return (
    <FirebaseListener path={props.path}>
      {props.text}
    </FirebaseListener>
  )
};
