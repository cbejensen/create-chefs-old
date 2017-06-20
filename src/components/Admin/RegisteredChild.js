import React from 'react';
import { Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import * as firebase from 'firebase';

class RegisteredChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null
    };
  }
  componentDidMount() {
    const pathRoot = this.props.isGroup
      ? 'groupClasses'
      : 'classes';
    this.listener = firebase
      .database()
      .ref(`children/${this.props.id}`);
    this.listener.on('value', snap => {
      const child = snap.val();
      this.setState({
        name: `${child.firstName} ${child.lastName}`
      });
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  render() {
    const styles = {
      btn: {
        margin: '5px',
        backgroundColor: 'black',
        color: 'white'
      }
    };
    if (this.state.name === null) return null;
    return (
      <Button
        style={styles.btn}
        onClick={() =>
          browserHistory.push(
            `admin/children/${this.props.id}`
          )}
      >
        {this.state.name}
      </Button>
    );
  }
}

export default RegisteredChild;
