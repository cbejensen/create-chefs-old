import React from 'react';
import SignInPrompt from './SignInPrompt';
import ChildList from './ChildList';
import {FirebaseListener} from 'components/FirebaseCustom';

export default function ChildListWrapper(props) {
  if (!props.uid) return <SignInPrompt linkColor="#e80202" />;
  return (
    <FirebaseListener
      path={`users/${props.uid}/children`}
      transform={childIds => Object.keys(childIds)}
      passDataAs="childIds"
    >
      <ChildList {...props} />
    </FirebaseListener>
  );
}
