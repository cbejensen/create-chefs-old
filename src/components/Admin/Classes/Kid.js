import React from 'react';
import {Panel} from 'react-bootstrap';
import Item from './Item';
import Parent from './Parent';
import {FirebaseListener} from 'components/FirebaseCustom';

export default function Kid(props) {
  const styles = {
    name: {
      margin: '0',
      color: '#aecd45',
    },
  };
  const kid = props.kid;
  const name = (
    <h3 style={styles.name}>{`${kid.firstName} ${kid.lastName}`}</h3>
  );
  return (
    <Panel>
      <Item text={name}>
        <div>
          <Item text="Age: ">{kid.age}</Item>
          <Item text="Allergies: ">{kid.allergies}</Item>
          <Item text="Notes: ">{kid.notes}</Item>
          <div style={{marginBottom: '10px'}} />
          <Item text="Parent">
            <FirebaseListener path={`users/${kid.parent}`} passDataAs="parent">
              <Parent />
            </FirebaseListener>
          </Item>
        </div>
      </Item>
    </Panel>
  );
}
