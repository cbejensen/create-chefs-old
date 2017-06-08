import React from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { Registrations } from './Registrations';
import { ClassForm } from './ClassForm';

class AdminNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: 0
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e) {
    this.setState({ activeKey: e });
  }
  render() {
    return (
      <div style={{ margin: '20px' }}>
        <Nav
          bsStyle="pills"
          activeKey={this.state.activeKey}
          onSelect={this.handleSelect}
        >
          <NavItem eventKey={0}>Registrations</NavItem>
          <NavItem eventKey={1}>Create Classes</NavItem>
        </Nav>
        {this.state.activeKey
          ? <ClassForm />
          : <Registrations />}
      </div>
    );
  }
}

export default AdminNav;
