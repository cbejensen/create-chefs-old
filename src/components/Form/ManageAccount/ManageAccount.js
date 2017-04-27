import React from 'react';
import {FormWrapper} from 'components/Form';
import UserInputGroup from './UserInputGroup';
import ChildrenBoxes from './ChildrenBoxes';
import EmergencyInputGroup from './EmergencyInputGroup';
import {Button} from 'react-bootstrap';
import {browserHistory} from 'react-router';
import * as firebase from 'firebase';

export default function ManageAccount(props) {
  const styles = {
    btns: {
      textAlign: 'center',
      margin: '0 auto 10px',
    },
  };
  function signOut() {
    firebase.auth().signOut();
    browserHistory.push('/sign-in');
  }
  return (
    <FormWrapper title="My Account">
      <form action={void 0}>
        <div style={styles.btns}>
          <Button
            type="button"
            bsStyle="primary"
            bsSize="small"
            onClick={() => browserHistory.push('/classes')}
            style={{marginRight: '20px'}}
          >
            Register for Classes
          </Button>
          <Button
            bsStyle="warning"
            bsSize="small"
            type="button"
            onClick={signOut}
          >
            Log Out
          </Button>
        </div>
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
