import React from 'react';
import ManageChild from 'components/Form/ManageChild';
import CheckAuth from 'components/CheckAuth';
import { Helmet } from 'react-helmet';

export default function ManageChildView(props) {
  return (
    <CheckAuth redirect>
      <ManageChild childId={props.params.childId} />
    </CheckAuth>
  );
}
