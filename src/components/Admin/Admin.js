import React from 'react';
import CheckAuth from 'components/CheckAuth';
import { CookClasses } from 'components/CookClasses';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

export default function Admin(props) {
  const styles = {
    btn: {
      margin: '5px',
      color: 'white'
    }
  };
  function getKey(path) {
    return firebase.database().ref(path).push().key;
  }
  function addClass() {
    const id = getKey('classes');
    browserHistory.push(`/admin/classes/${id}`);
  }
  function addGroup() {
    const id = getKey('classGroups');
    browserHistory.push(`/admin/class-groups/${id}`);
  }
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        <Button
          onClick={addClass}
          style={styles.btn}
          bsStyle="success"
        >
          + Add Class
        </Button>
        <Button
          onClick={addGroup}
          style={styles.btn}
          bsStyle="primary"
        >
          + Add Group
        </Button>
      </div>
      <CookClasses isAdmin />
    </div>
  );
}
