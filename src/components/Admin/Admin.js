import React from 'react';
import {Registrations} from './Registrations';
import CheckAuth from 'components/CheckAuth';

export default function Admin(props) {
  return (
    <div style={{margin: '20px'}}>
      <CheckAuth redirect>
        <Registrations />
      </CheckAuth>
    </div>
  );
}
