import React from 'react';
import {FirebaseFormBlurHandler} from 'components/FirebaseHelpers';
import ManageChild from './ManageChild';

export default function ManageChildContainer(props) {
  return (
    <FirebaseFormBlurHandler path={`children/${props.childId}`}>
      <ManageChild {...props} />
    </FirebaseFormBlurHandler>
  );
}
