import React from 'react';
import ChildBoxes from 'components/ListBoxes/ChildBoxes';
import InputGroupHeading from './InputGroupHeading';
import {browserHistory} from 'react-router';
import {FirebaseListener} from 'components/FirebaseCustom';
import {addChild} from 'utils/firebaseHelpers';

export default function ChildrenBoxes(props) {
  return (
    <div>
      <InputGroupHeading
        heading="Children"
        subHeading="click a child's name to edit"
        commandText="+ Add Child"
        handleCommandClick={() => addChild(props.uid, 'Jane', 'Doe')}
      />
      <FirebaseListener
        path={`users/${props.uid}/children`}
        passDataAs="childIds"
      >
        <ChildBoxes />
      </FirebaseListener>
    </div>
  );
}
