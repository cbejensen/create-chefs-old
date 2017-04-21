import React from 'react';
import {FormWrapper} from 'components/Form';
import UserInputGroup from './UserInputGroup';
import ChildrenBoxes from './ChildrenBoxes';
import EmergencyInputGroup from './EmergencyInputGroup';
import * as firebase from 'firebase';

export default function ManageAccount(props) {
  return (
    <FormWrapper title="My Account">
      <form action={void 0}>
        <button
          type="button"
          onClick={() => firebase.auth().signOut()}
          style={{display: 'block', margin: 'auto'}}
        >
          {/* TODO: remove btn or make it look good */}
          Log Out
        </button>
        <UserInputGroup uid={props.uid} />
        <ChildrenBoxes uid={props.uid} />
        <EmergencyInputGroup uid={props.uid} />
      </form>
    </FormWrapper>
  );
}

ManageAccount.propTypes = {
  uid: React.PropTypes.node,
};
