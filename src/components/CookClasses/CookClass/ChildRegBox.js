import React from 'react';
import {Button} from 'react-bootstrap';
import * as firebase from 'firebase';

class ChildRegBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {name: '', regd: null};
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    this.listener = firebase.database().ref(`children/${this.props.id}`);
    this.listener.on('value', snap => {
      if (!snap) {
        this.setState({regd: null});
        return;
      }
      const child = snap.val();
      let regd = false;
      if (child.registered) {
        for (const classId in child.registered) {
          if (classId === this.props.classId) {
            regd = true;
          }
        }
      }
      this.setState({
        name: `${child.firstName} ${child.lastName}`,
        regd: regd,
      });
    });
  }
  componentWillUnmount() {
    this.listener.off();
  }
  register() {
    // update both class and child regs
    const childPath = `children/${this.props.id}/registered/${this.props.classId}`;
    const classPath = `classes/${this.props.classId}/registered/${this.props.id}`;
    // if regd now, unregister, and vice versa
    const status = this.state.regd ? null : true;
    const reg = {
      [childPath]: status,
      [classPath]: status,
    };
    // update both paths atomically
    firebase.database().ref().update(reg);
  }
  render() {
    if (this.state.regd === null) return null;
    const color = {
      backgroundColor: this.state.regd ? '#69de51' : '#8e8e8e',
      border: 'none',
    };
    return (
      <span>
        <Button style={color} onClick={this.register}>
          {this.state.name}
        </Button>
        {this.state.regd && <div style={{fontSize: '0.7em'}}>REGISTERED</div>}
      </span>
    );
  }
}

export default ChildRegBox;
