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
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    this.fbRef = firebase.database().ref(`children/${this.props.childId}`);
    this.fbRef.on('value', snap => {
      this.setState(snap.val());
    });
  }
  componentWillUnmount() {
    this.fbRef.off()
  }
  handleChange(field, e) {
    this.setState({[field]: e.target.value});
  }
  handleSubmit() {
    console.log(this.state);
  }
  render() {
    return (
      <ManageChild
        {...this.state}
        childId={this.props.childId}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ManageChildContainer;
