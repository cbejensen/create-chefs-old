import React from 'react';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import AddOrSubtract from './AddOrSubtract';
import {browserHistory} from 'react-router';
import {Button} from 'react-bootstrap';
import * as firebase from 'firebase';

class ManageAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [
        {
          name: '',
          age: '',
          gender: '',
          allergies: '',
          notes: '',
        },
      ],
      parent: {
        name: '',
        relation: '',
      },
      contact: {
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: '',
      },
      emergency: {
        name: '',
        relation: '',
        phone: '',
      },
    };
    this.handleChildChange = this.handleChildChange.bind(this);
    this.addChild = this.addChild.bind(this);
    this.removeChild = this.removeChild.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleEmergencyChange = this.handleEmergencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    const ref = firebase.database().ref(`users/${this.props.uid}`);
    ref.on('value', snap => {
      this.setState(snap.val());
    });
  }
  handleChildChange(field, index, e) {
    const children = this.state.children;
    children[index][field] = e.target.value;
    this.setState({children});
  }
  addChild() {
    // clone obj while preventing changes to original
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
    setTimeout(
      () => {
        console.log(this.state);
      },
      3000,
    );
  }
  removeChild() {
    const arr = this.state.children;
    arr.pop();
    this.setState({children: arr});
  }
  handleParentChange(field, e) {
    const parent = this.state.parent;
    parent[field] = e.target.value;
    this.setState({parent});
  }
  handleContactChange(field, e) {
    const contact = this.state.contact;
    contact[field] = e.target.value;
    this.setState({contact});
  }
  handleEmergencyChange(field, e) {
    const emergency = this.state.emergency;
    emergency[field] = e.target.value;
    this.setState({emergency});
  }
  handleAgreement(e) {
    this.setState({agreement: e.target.checked});
  }
  handleSubmit(e) {
    e.preventDefault();
    firebase.database().ref(`users/${this.state.uid}`).set(this.state);
  }
  render() {
    let childNum = 0;
    if (this.state.children.length > 1) {
      childNum = 1;
    }
    return (
      <form onSubmit={this.handleSubmit} className="ManageAccount">
        <header className="h2 text-center">MY ACCOUNT</header>
        {this.state.children.map((child, i) => {
          return (
            <ChildInputGroup
              handleChange={this.handleChildChange}
              key={i}
              index={i}
              child={child}
              childNum={childNum + i}
            />
          );
        })}
        <AddOrSubtract
          add={this.addChild}
          subtract={this.removeChild}
          label="Child"
          addText="Add Child"
          subtractText="Remove Child"
        />
        <ParentInputGroup
          parent={this.state.parent}
          handleChange={this.handleParentChange}
        />
        <ContactInputGroup
          contact={this.state.contact}
          handleChange={this.handleContactChange}
        />
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

export default ManageAccount;
