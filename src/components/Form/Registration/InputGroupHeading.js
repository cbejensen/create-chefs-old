import React from 'react';

class InputGroupHeading extends React.Component {
  render() {
    return (
      <header className="InputGroupHeading">
        <div>
          <em className="h4">{this.props.heading}</em>
          <small><em>{this.props.subHeading}</em></small>
        </div>
        <hr style={{margin: '0 0 5px 0'}}/>
        {this.props.children}
      </header>
    )
  }
};

export default InputGroupHeading;
