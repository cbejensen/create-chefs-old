import React from 'react';
import {ManageAccount} from '../components/Form/ManageAccount';
import CheckAuth from 'components/CheckAuth';

export default function ManageAccountView(props) {
  return (
    <CheckAuth redirect>
      <ManageAccount />
    </CheckAuth>
  );
}
