import React from 'react';
import * as firebase from 'firebase';

class FirebaseListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null, loading: true };
  }
  componentDidMount() {
    this.listener = firebase
      .database()
      .ref(this.props.path);
    this.listener.on('value', snap => {
      console.log('fb', snap.val());
      if (!snap) {
        this.setState({ data: null, loading: false });
        return;
      } else {
        let data = snap.val();
        if (data && this.props.transform)
          data = this.props.transform(data);
        this.setState({
          data: data ? data : null,
          loading: false
        });
      }
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  render() {
    const {
      path,
      transform,
      passDataAs,
      redirect,
      returnAsText,
      whileLoading,
      ...propsToPass
    } = this.props;
    if (this.state.data === null && this.state.loading) {
      return whileLoading || null;
    }
    const attr = passDataAs || 'data';
    const props = {
      ...propsToPass,
      [attr]: this.state.data
    };
    return (
      <span>
        {returnAsText
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
  whileLoading: React.PropTypes.node
};

export default FirebaseListener;
