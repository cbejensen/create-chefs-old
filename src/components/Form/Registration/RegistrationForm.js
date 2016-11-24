import React from 'react';
import Agreement from './Agreement';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import DatePicker from './DatePicker';
import { Button } from 'react-bootstrap';

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
    console.log(this.state);
  }
  render() {
    const dates = [{
      day: '11/22/16',
      time: '4-6pm'
    }, {
      day: '11/24/16',
      time: '5-7pm'
    }, {
      day: '12/3/16',
      time: '5-7pm'
    }, {
      day: '12/14/16',
      time: '4-6pm'
    },  {
      day: '12/23/16',
      time: '4-6pm'
    }];
    // TODO: make state and agreement required
    return (
      <form onSubmit={this.handleSubmit}>
        <header className="h2 text-center">REGISTRATION FORM</header>
        <ChildInputGroup handleChange={this.handleChildChange}/>
        <ParentInputGroup handleChange={this.handleParentChange}/>
        <ContactInputGroup handleChange={this.handleContactChange}/>
        <EmergencyInputGroup handleChange={this.handleEmergencyChange}/>
        <DatePicker dates={dates} />
        <Agreement />
        <Button type="submit" bsStyle="primary" bsSize="large">
          Submit
        </Button>
      </form>
    )
  }
};

export default RegistrationForm;
