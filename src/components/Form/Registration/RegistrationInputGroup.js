import React from 'react';

class RegistrationInputGroup extends React.Component {
  render() {
    return (
      <section>
        <em className="h4">{this.props.heading}</em>
        <hr style={{margin: '0 0 5px 0'}}/>
        {this.props.children}
      </section>
    )
  }
};

export default RegistrationInputGroup;
