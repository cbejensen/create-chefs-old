import React from 'react';
import UserInputGroup from './UserInputGroup';
import ChildrenBoxes from './ChildrenBoxes';
import EmergencyInputGroup from './EmergencyInputGroup';
import AddOrSubtract from './AddOrSubtract';
import {Button} from 'react-bootstrap';
import FirebaseListener from 'components/FirebaseHelpers/FirebaseListener';
import * as firebase from 'firebase';

export default function ManageAccount(props) {
  return (
    <form className="ManageAccount">
      <button
        onClick={() => firebase.auth().signOut()}
        style={{display: 'block', margin: 'auto'}}
      >
        {/* TODO: remove btn or make it look good */}
        Log Out
      </button>
      <UserInputGroup uid={props.uid} />
      <FirebaseListener
        path={`users/${props.uid}/children`}
        passDataAs="childIds"
      >
        <ChildrenBoxes />
      </FirebaseListener>
      <EmergencyInputGroup uid={props.uid} />
    </form>
  );
}

ManageAccount.propTypes = {
  uid: React.PropTypes.node,
};
