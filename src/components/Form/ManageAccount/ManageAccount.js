import React from 'react';
import UserInputGroup from './UserInputGroup';
import ChildrenInputGroup from './ChildrenInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import AddOrSubtract from './AddOrSubtract';
import {Button} from 'react-bootstrap';
import DataListener from 'components/FirebaseHelpers/DataListener';
import * as firebase from 'firebase';

class ManageAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      phone: '',
      address: '',
      city: '',
      state: '',
      zip: '',
      children: {},
      emergency: {
        firstName: '',
        lastName: '',
        relation: '',
        phone: '',
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChildChange = this.handleChildChange.bind(this);
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.handleEmergencyChange = this.handleEmergencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const ref = firebase.database().ref(`users/${this.props.uid}`);
    ref.on('value', snap => {
      this.setState(snap.val());
    });
  }
  handleChange(field, e) {
    console.log(field, e.target);
    const newState = this.state;
    newState[field] = e.target.value;
    this.setState(newState);
  }
  handleEmergencyChange(field, e) {
    const emergency = this.state.emergency;
    emergency[field] = e.target.value;
    this.setState({emergency});
  }
  handleChildChange(field, index, e) {
    const children = this.state.children;
    children[index][field] = e.target.value;
    this.setState({children});
  }
  addChild() {
    const child = {...this.state.children[0]};
    for (var key in child) {
      if ({}.hasOwnProperty.call(child, key)) {
        child[key] = '';
      }
    }
    const newArray = this.state.children;
    newArray.push(child);
    this.setState({
      children: newArray,
    });
  }
  removeChild() {
    const arr = this.state.children;
    arr.pop();
    this.setState({children: arr});
  }
  handleSubmit(e) {
    e.preventDefault();
    firebase.database().ref(`users/${this.props.uid}`).set(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="ManageAccount">
        <header className="h2 text-center">MY ACCOUNT</header>
        <button
          onClick={() => firebase.auth().signOut()}
          style={{display: 'block', margin: 'auto'}}
        >
          {/* TODO: remove btn or make it look good */}
          Log Out
        </button>
        <UserInputGroup
          firstName={this.state.firstName}
          lastName={this.state.lastName}
          phone={this.state.phone}
          address={this.state.address}
          city={this.state.city}
          state={this.state.state}
          zip={this.state.zip}
          handleChange={this.handleChange}
        />
        <ChildrenInputGroup childIds={this.state.children} />
        <EmergencyInputGroup
          emergency={this.state.emergency}
          handleChange={this.handleEmergencyChange}
        />
        <Button
          type="submit"
          bsStyle="primary"
          bsSize="large"
          className="ManageAccount-btn-submit"
        >
          Save
        </Button>
      </form>
    );
  }
}

ManageAccount.propTypes = {
  uid: React.PropTypes.string,
};

export default ManageAccount;
