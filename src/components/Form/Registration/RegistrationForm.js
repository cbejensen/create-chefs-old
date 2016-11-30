import React from 'react';
import Agreement from './Agreement';
import ChildInputGroup from './ChildInputGroup';
import ParentInputGroup from './ParentInputGroup';
import ContactInputGroup from './ContactInputGroup';
import EmergencyInputGroup from './EmergencyInputGroup';
import AddInputGroup from './AddInputGroup';
import ClassPicker from './ClassPicker';
import { Button } from 'react-bootstrap';
import { register } from '../../../utils/firebaseHelpers';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: [{
        name: '',
        age: '',
        gender: '',
        allergies: '',
        notes: ''
      }],
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
      },
      classes: []
    };
    this.handleChildChange = this.handleChildChange.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleEmergencyChange = this.handleEmergencyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addChild = this.addChild.bind(this);
  }
  handleChildChange(field, index, e) {
    console.log(this.state);
    const children = this.state.children;
    children[index][field] = e.target.value;
    this.setState({children});
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
  addChild(e) {
    console.log(this.state)
    // clone object without changes to clone affecting original
    const child = JSON.parse(JSON.stringify(this.state.children[0]))
    for (var key in child) {
      child[key] = '';
    }
    const newArray = this.state.children;
    newArray.push(child);
    this.setState({
      children: newArray
    })
    setTimeout(() => {console.log(this.state)}, 3000)
  }
  handleSubmit(e) {
    console.log(this.state);
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
    let childNum = 0;
    if (this.state.children.length > 1) {
      childNum = 1;
    }
    return (
      <form onSubmit={this.handleSubmit} className="RegistrationForm">
        <header className="h2 text-center">REGISTRATION FORM</header>
        {this.state.children.map((child, i) => {
          return <ChildInputGroup handleChange={this.handleChildChange}
              key={i} index={i} childNum={childNum + i} />
        })}
        <AddInputGroup handleClick={this.addChild} label="Child"/>
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
