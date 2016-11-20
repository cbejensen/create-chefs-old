import React from 'react';

class RegistrationInputGroup extends React.Component {
  render() {
    return (
      <section className="RegistrationInputGroup-container">
        <div className="RegistrationInputGroup-heading">
          <em className="h4">{this.props.heading}</em>
          <small><em>{this.props.subHeading}</em></small>
        </div>
        <hr style={{margin: '0 0 5px 0'}}/>
        {this.props.children}
      </section>
    )
  }
};

export default RegistrationInputGroup;
