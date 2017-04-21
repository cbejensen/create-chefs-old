import React from 'react';
import Body from './CookClassBody';

class CookClassBodyContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seeChildList: false,
    };
    this.showChildList = this.showChildList.bind(this);
  }
  showChildList() {
    this.setState((prevState, props) => {
      return {
        seeChildList: !prevState.seeChildList,
      };
    });
  }
  render() {
    return (
      <Body
        showChildList={this.showChildList}
        {...this.state}
        {...this.props}
      />
    );
  }
}

export default CookClassBodyContainer;
