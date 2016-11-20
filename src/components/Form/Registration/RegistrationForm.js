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
        gender: ''
      },
      parent: {
        name: '',
        relation: ''
      },
      address: {
        street: '',
        city: '',
        state: '',
        zip: ''
      },
      emergency: {
        name: '',
        relation: '',
        phone: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert('submitted!')
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
        <ChildInputGroup />
        <ParentInputGroup />
        <ContactInputGroup />
        <EmergencyInputGroup />
        <DatePicker dates={dates}/>
        <Agreement />
        <Button type="submit" bsStyle="primary" bsSize="large">
          Submit
        </Button>
      </form>
    )
  }
};

export default RegistrationForm;
