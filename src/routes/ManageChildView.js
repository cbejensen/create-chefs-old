import React from 'react';
import ManageChild from 'components/Form/ManageChild';

export default function ManageChildView(props) {
  return <ManageChild childId={props.params.childId} />;
}
