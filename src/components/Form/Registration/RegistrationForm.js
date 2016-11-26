import React from 'react';
import Agreement from './Agreement';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import ClassPicker from './ClassPicker';
import { Button } from 'react-bootstrap';
import { register } from '../../../utils/firebaseHelpers';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: {
        name: '',
        age: '',
        gender: '',
        allergies: '',
        notes: ''
      },
      parent: {
        name: '',
        relation: ''
      },
      contact: {
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        email: ''
      },
      emergency: {
        name: '',
        relation: '',
        phone: ''
      }
    };
    this.handleChildChange = this.handleChildChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleEmergencyChange = this.handleEmergencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChildChange(field, e) {
    const child = this.state.child;
    child[field] = e.target.value;
    this.setState({child});
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
  handleSubmit(e) {
    e.preventDefault();
    register(this.state);
  }
  render() {
    const classes = [{
      date: '11/22/16',
      time: '4-6pm',
      theme: 'Fall into Flavor!',
      food: ['Pumpkin Chocolate Chip Muffins',
      'Chocolate Peanut Butter Chip Cookies',
      'Yummy Hummus']
    }, {
      date: '12/12/16',
      time: '5-7pm',
      theme: 'Another theme!',
      food: ['Fake Food',
      'Walnuts']
    }];
    // TODO: make state and agreement required
    return (
      <form onSubmit={this.handleSubmit} className="RegistrationForm">
        <header className="h2 text-center">REGISTRATION FORM</header>
        <ChildInputGroup handleChange={this.handleChildChange}/>
        <ParentInputGroup handleChange={this.handleParentChange}/>
        <ContactInputGroup handleChange={this.handleContactChange}/>
        <EmergencyInputGroup handleChange={this.handleEmergencyChange}/>
        <ClassPicker classes={classes} />
        <Agreement />
        <Button type="submit" bsStyle="primary" bsSize="large"
          className="RegistrationForm-btn-submit">
          Submit
        </Button>
      </form>
    )
  }
};

export default RegistrationForm;
