import React from 'react';
import * as firebase from 'firebase';

class DataListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }
  componentDidMount() {
    this.path = firebase.database().ref(this.props.path);
    this.path.on('value', snap => {
      this.setState({data: snap.val() ? snap.val() : false});
    });
  }
  componentWillUnmount() {
    this.path.off();
  }
  render() {
    if (this.state.data === null) return null;
    const attr = this.props.passDataAs || 'data';
    return (
      <div>
        {React.cloneElement(this.props.children, {
          [attr]: this.state.data,
        })}
      </div>
    );
  }
}

DataListener.propTypes = {
  path: React.PropTypes.string.isRequired,
  passDataAs: React.PropTypes.string,
};

export default DataListener;
