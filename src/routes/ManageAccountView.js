import React from 'react';
import { ManageAccount } from '../components/Form/ManageAccount';
import CheckAuth from 'components/CheckAuth';
import { Helmet } from 'react-helmet';

export default function ManageAccountView(props) {
  return (
    <CheckAuth redirect>
      <ManageAccount />
    </CheckAuth>
  );
}
