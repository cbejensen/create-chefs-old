import React from 'react';
import CheckAuth from 'components/CheckAuth';
import AdminNav from './AdminNav';


class Admin extends React.Component {
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
      <CheckAuth redirect>
        <AdminNav />
      </CheckAuth>
    );
  }
}

export default Admin;
