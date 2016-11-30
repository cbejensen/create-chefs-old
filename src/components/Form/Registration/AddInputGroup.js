import React from 'react';
import { Badge } from 'react-bootstrap';

class AddInputGroup extends React.Component {
  render() {
    return (
      <div className="AddInputGroup-container"
        onClick={this.props.handleClick}>
        <Badge className="AddInputGroup-plus-sign">+</Badge>
        Add {this.props.label}
      </div>
    )
  }
};

export default AddInputGroup;
