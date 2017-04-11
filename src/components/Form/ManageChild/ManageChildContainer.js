import React from 'react';
import ManageChild from './ManageChild';
import * as firebase from 'firebase';

class ManageChildContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      gender: '',
      age: '',
      allergies: '',
      notes: '',
    };
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount() {
    this.fbRef = firebase.database().ref(`children/${this.props.childId}`);
    this.fbRef.once('value').then(snap => {
      this.setState(snap.val());
    });
  }
  componentWillUnmount() {
    this.fbRef.off();
  }
  handleBlur(field, e) {
    const val = e.target.value;
    // if input is empty, change to original value
    // as it was when component mounted
    if (val === '') this.fbRef.child(`/${field}`).set(this.state[field]);
  }
  render() {
    return (
      <ManageChild
        {...this.state}
        childId={this.props.childId}
        handleBlur={this.handleBlur}
      />
    );
  }
}

export default ManageChildContainer;
