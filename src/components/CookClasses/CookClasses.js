import React from 'react';
import {FirebaseListener} from 'components/FirebaseCustom';
import CookClassList from './CookClassList';

class CookClasses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {modal: true};
  }
  render() {
    console.log('CookClasses render');
    return (
      <FirebaseListener path="classes" passDataAs="classes">
        <CookClassList />
      </FirebaseListener>
    );
  }
}

export default CookClasses;
