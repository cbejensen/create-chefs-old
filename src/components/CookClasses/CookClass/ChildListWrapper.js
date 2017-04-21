import React from 'react';
import SignInPrompt from './SignInPrompt';
import ChildList from './ChildList';
import {FirebaseListener} from 'components/FirebaseCustom';

export default function ChildListWrapper(props) {
  const childList = (
    <FirebaseListener
      path={`users/${props.uid}/children`}
      transform={childIds => Object.keys(childIds)}
      passDataAs="childIds"
    >
      <ChildList {...props} />
    </FirebaseListener>
  );
  return props.uid ? childList : <SignInPrompt linkColor="#e80202" />;
}
