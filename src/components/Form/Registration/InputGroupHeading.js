import React from 'react';

class InputGroupHeading extends React.Component {
  render() {
    return (
      <header className="InputGroupHeading">
        <div>
          <em className="h4">{this.props.heading}</em>
        </div>
        <hr/>
        <small><em>{this.props.subHeading}</em></small>
        {this.props.children}
      </header>
    )
  }
};

export default InputGroupHeading;
