import React from 'react';
import ChildBoxes from 'components/ListBoxes/ChildBoxes';
import InputGroupHeading from './InputGroupHeading';
import {browserHistory} from 'react-router';

export default function ChildrenInputGroup(props) {
  return (
    <div>
      <InputGroupHeading
        heading="Children"
        subHeading="click a child's name to edit"
      />
      <ChildBoxes childIds={props.childIds} />
    </div>
  );
}
