import React from 'react';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import DatePicker from './DatePicker';

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
    return (
      <div>
        <header className="h2 text-center">REGISTRATION FORM</header>
        <ChildInputGroup />
        <ParentInputGroup />
        <ContactInputGroup />
        <EmergencyInputGroup />
        <DatePicker dates={dates}/>
      </div>
    )
  }
};

export default RegistrationForm;
