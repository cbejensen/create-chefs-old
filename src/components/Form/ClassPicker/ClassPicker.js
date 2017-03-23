import React from 'react';
import ClassBox from './ClassBox';
import {Row, Col} from 'react-bootstrap';
import * as firebase from 'firebase';
import './index.css';

class ClassPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: null,
    };
    this.handleClassPick = this.handleClassPick.bind(this);
  }
  componentDidMount() {
    firebase.database().ref('classes').on('value', snap => {
      // assign uid to id prop
      const obj = {...snap.val()};
      for (let key in obj) {
        obj[key].id = key;
      }
      // convert to Array
      const arr = Object.keys(obj).map(key => obj[key]);
      this.setState({classes: arr});
    });
  }
  componentWillUnmount() {
    firebase.database().ref('classes').off();
  }
  handleClassPick(id, e) {
    const checked = e.target.checked;
    const ref = firebase.database().ref(`classes/${id}`);
    if (checked) {
      console.log(id, 'yes');
    } else {
      console.log(id, 'no');
    }
  }
  render() {
    if (!this.state.classes || !this.state.classes.length)
      return <h3>Sorry, there are no available classes at this time.</h3>;
    return (
      <section>
        <Row className="ClassPicker-container">
          {this.state.classes.map((item, i) => {
            console.log(item);
            return (
              <Col sm={6} md={4} key={i}>
                <ClassBox
                  item={item}
                  index={i}
                  handleClick={this.handleClassPick}
                />
              </Col>
            );
          })}
        </Row>
      </section>
    );
  }
}

export default ClassPicker;
