import React from 'react';
import {FirebaseListener} from 'components/FirebaseCustom';
import CookClassList from './CookClassList';
import Loading from 'components/Loading';

export default function CookClasses(props) {
  const styles = {
    loading: {
      paddingTop: '50px',
    },
  };
  const showLoading = <Loading style={styles.loading} />
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
      whileLoading={showLoading}
    >
      <CookClassList />
    </FirebaseListener>
  );
}
