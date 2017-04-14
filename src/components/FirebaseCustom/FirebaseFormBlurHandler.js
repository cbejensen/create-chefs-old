import React from 'react';
import * as firebase from 'firebase';

class FirebaseFormBlurHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevData: {},
    };
    this.handleBlur = this.handleBlur.bind(this);
  }
  componentDidMount() {
    this.fbRef = firebase.database().ref(this.props.path);
    this.fbRef.once('value').then(snap => {
      this.setState({prevData: snap.val()});
    });
  }
  componentWillUnmount() {
    this.fbRef.off();
  }
  handleBlur(field, e) {
    const val = e.target.value;
    // if input is empty, change to original value when component mounted
    if (val === '')
      this.fbRef.child(`/${field}`).set(this.state.prevData[field]);
  }
  render() {
    return React.cloneElement(this.props.children, {
      handleBlur: this.handleBlur,
    });
  }
}

export default FirebaseFormBlurHandler;
