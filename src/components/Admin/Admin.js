import React from 'react';
import AdminNav from './AdminNav';
import ViewRegistrations from './ViewRegistrations';

class Admin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 0};
    this.handleNavSelect = this.handleNavSelect.bind(this);
  }
  handleNavSelect(i) {
    this.setState({view: i});
  }
  render() {
    return (
      <div>
        <AdminNav handleClick={this.handleNavSelect} />
        {!this.state.view && <ViewRegistrations />}
        {/* {this.state.view && <CreateClass />} */}
      </div>
    );
  }
}

export default Admin;
