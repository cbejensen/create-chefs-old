import React from 'react';
import ChildBox from 'components/ChildBox';
import * as firebase from 'firebase';

class ChildRegBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: '', regd: false};
    this.register = this.register.bind(this);
  }
  componentDidMount() {
    this.removeListener = firebase
      .database()
      .ref(`children/${this.props.id}`)
      .on('value', snap => {
        if (!snap) {
          this.setState({regd: null});
          return;
        }
        const child = snap.val();
        console.log(child);
        let regd = false;
        if (child.registered) {
          for (const classId in child.registered) {
            if (classId === this.props.classId) {
              console.log(this.props.id, classId, this.props.classId);
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
    this.removeListener();
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
      backgroundColor: this.state.regd ? '#2fcb2f' : '#e80202',
    };
    return (
      <ChildBox
        name={this.state.name}
        id={this.props.id}
        style={color}
        handleClick={this.register}
      />
    );
  }
}

export default ChildRegBox;
