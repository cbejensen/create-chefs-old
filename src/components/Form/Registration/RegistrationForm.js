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
      registeredClasses: []
    };
    this.handleChildChange = this.handleChildChange.bind(this);
    this.addChild = this.addChild.bind(this);
    this.handleParentChange = this.handleParentChange.bind(this);
    this.handleContactChange = this.handleContactChange.bind(this);
    this.handleEmergencyChange = this.handleEmergencyChange.bind(this);
    this.handleClassPick = this.handleClassPick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChildChange(field, index, e) {
    console.log(this.state);
    const children = this.state.children;
    children[index][field] = e.target.value;
    this.setState({children});
  }
  addChild(e) {
    console.log(this.state)
    // clone obj while preventing changes to original
    const child = JSON.parse(JSON.stringify(this.state.children[0]))
    for (var key in child) {
      if ({}.hasOwnProperty.call(child, key)) {
        child[key] = '';
      }
    }
    const newArray = this.state.children;
    newArray.push(child);
    this.setState({
      children: newArray
    })
    setTimeout(() => {console.log(this.state)}, 3000)
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
  handleClassPick(date, e) {
    const checked = e.target.checked;
    this.setState((prevState, props) => {
      let newArray = prevState.registeredClasses.slice();
      if (checked) {
        newArray.push(date);
        newArray = newArray.sort();
        return {
          registeredClasses: newArray
        };
      } else {
        let classToRemove;
        this.state.registeredClasses.forEach((item, i) => {
          if (item === date) {
            classToRemove = i;
          }
        })
        newArray.splice(classToRemove, 1);
        return {
          registeredClasses: newArray
        }
      }
    })
    setTimeout(() => {console.log(this.state)}, 2000)
  }
  handleAgreement(e) {
    this.setState({agreement: e.target.checked})
  }
  handleSubmit(e) {
    e.preventDefault();
    register(this.state);
  }
  render() {
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
        <ClassPicker classes={this.state.classes} handleClick={this.handleClassPick} />
        <Agreement handleClick={this.handleAgreement}/>
        <Button type="submit" bsStyle="primary" bsSize="large"
          className="RegistrationForm-btn-submit">
          Submit
        </Button>
      </form>
    )
  }
};

export default RegistrationForm;
