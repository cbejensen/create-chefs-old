import React from 'react';
import Reg from './Reg';
import { Accordion } from 'react-bootstrap';
import * as firebase from 'firebase';

class Classes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { classes: null };
  }
  componentDidMount() {
    firebase.database().ref('classes').on('value', snap => {
      const data = snap.val();
      const arr = Object.keys(data).map(id => {
        const obj = data[id];
        obj.id = id;
        // create arrays
        obj.lessons = Object.keys(obj.lessons).map(
          key => obj.lessons[key]
        );
        // get array of child id's registered
        if (obj.registered)
          obj.registered = Object.keys(obj.registered);
        return obj;
      });
      const classes = arr.sort(
        (a, b) => (a.date > b.date ? 1 : -1)
      );
      this.setState({ classes: classes });
    });
  }
  render() {
    if (!this.state.classes) return null;
    if (this.state.classes.length === 0)
      return (
        <div>Sorry, there are no classes to show!</div>
      );
    return (
      <Accordion activeKey={this.state.activeKey}>
        {this.state.classes.map((classObj, i) => (
          <Reg key={i} eventKey={i} {...classObj} />
        ))}
      </Accordion>
    );
  }
}

export default Classes;
