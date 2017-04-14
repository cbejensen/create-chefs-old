import React from 'react';
import * as firebase from 'firebase';

class FirebaseListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: null};
  }
  componentDidMount() {
    this.path = firebase.database().ref(this.props.path);
    this.path.on('value', snap => {
      let data = snap.val();
      if (this.props.transform) data = this.props.transform(data);
      this.setState({data: data ? data : false});
    });
  }
  componentWillUnmount() {
    this.path.off();
  }
  render() {
    if (this.state.data === null) return null;
    const attr = this.props.passDataAs || 'data';
    return this.props.returnAsText
      ? <span>{this.state.data}</span>
      : <div style={{height: '100%'}}>
          {React.cloneElement(this.props.children, {
            [attr]: this.state.data,
          })}
        </div>;
  }
}

FirebaseListener.propTypes = {
  path: React.PropTypes.string.isRequired,
  passDataAs: React.PropTypes.string,
  transofrm: React.PropTypes.func,
  returnAsText: React.PropTypes.bool,
};

export default FirebaseListener;
