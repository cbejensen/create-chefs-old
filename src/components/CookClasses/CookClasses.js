import React from 'react';
import {FirebaseListener} from 'components/FirebaseCustom';
import CookClassList from './CookClassList';

export default function CookClasses(props) {
  function removeRegs(classes) {
    // regs are unneeded
    for (const id in classes) {
      delete classes[id].registered;
    }
    return classes;
  }
  return (
    <FirebaseListener
      path="classes"
      transform={removeRegs}
      passDataAs="classes"
    >
      <CookClassList />
    </FirebaseListener>
  );
}
