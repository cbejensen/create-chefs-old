import React from 'react';
import * as firebase from 'firebase';

class FirebaseListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }
  componentDidMount() {
    this.listener = firebase.database().ref(this.props.path);
    this.listener.on('value', snap => {
      if (!snap) {
        this.setState({data: null});
        return;
      } else {
        let data = snap.val();
        if (data && this.props.transform) data = this.props.transform(data);
        this.setState({data: data ? data : false});
      }
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  render() {
    if (this.state.data === null) return null;
    const attr = this.props.passDataAs || 'data';
    const {path, transform, passDataAs, redirect, ...propsToPass} = this.props;
    const props = {...propsToPass, [attr]: this.state.data};
    return (
      <span>
        {this.props.returnAsText
          ? <span>{this.state.data}</span>
          : React.cloneElement(this.props.children, props)}
      </span>
    );
  }
}

FirebaseListener.propTypes = {
  path: React.PropTypes.string.isRequired,
  passDataAs: React.PropTypes.string,
  transform: React.PropTypes.func,
  returnAsText: React.PropTypes.bool,
};

export default FirebaseListener;
