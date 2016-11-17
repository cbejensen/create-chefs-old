import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      child: {
        name: '',
        sex: '',
        age: ''
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
      }
    }
  }
  render() {
    return (
      <div>
        <header className="h2 text-center">REGISTRATION FORM</header>
        <ChildInputGroup />
        <ParentInputGroup />
        <ContactInputGroup />
        <EmergencyInputGroup />
      </div>
    )
  }
};

export default RegistrationForm;
