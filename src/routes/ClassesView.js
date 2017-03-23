import React from 'react';
import {ClassPicker} from 'components/Form/ClassPicker';

export default function ClassesView(props) {
  return (
    <div>
      <h1>Available Classes</h1>
      <ClassPicker />
    </div>
  );
}
