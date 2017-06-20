import React from 'react';
import FieldGroup from '../FieldGroup';
import GroupForm from './GroupForm';
import * as firebase from 'firebase';

class ClassFormContainer extends React.Component {
  constructor(props) {
    super(props);
    const info = this.props.group;
    this.state = {
      classes: info.classes || [],
      theme: info.theme || '',
      subtitle: info.subtitle || '',
      description: info.description || '',
      price: info.price || '',
      lessons: info.lessons || ['', '', '']
    };
  }
  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState((prevState, props) => {
      return {
        [name]: value
      };
    });
  };
  handleClassChange = classId => {
    console.log(classId);
    this.setState((prevState, props) => {
      // find out if class is already in group
      // by converting array to object
      // then checking for object key
      const oldClasses = [...prevState.classes];
      const state = {};
      oldClasses.forEach(
        currentId => (state[currentId] = true)
      );
      if (state[classId]) {
        delete state[classId];
      } else {
        state[classId] = true;
      }
      const newClasses = Object.keys(state);
      const newState = { ...prevState };
      return {
        ...newState,
        classes: newClasses
      };
      // let inGroup = false;
      // for (let i = classes.length - 1; i >= 0; i--) {
      //   if (classes[i] === classId) {
      //     classes.splice(i, 1);
      //   }
      // }
    });
  };
  handleLessonChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    const index = parseInt(name.slice(6));
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.lessons[index] = value;
      return newState;
    });
  };
  addLesson = () => {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.lessons.push('');
      firebase.database;
    });
  };
  removeLesson = () => {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.lessons.pop();
      return newState;
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    firebase
      .database()
      .ref(`classGroups/${this.props.group.id}`)
      .update(this.state);
  };
  render() {
    return (
      <GroupForm
        {...this.state}
        groupId={this.props.group.id}
        handleChange={this.handleChange}
        handleLessonChange={this.handleLessonChange}
        addLesson={this.addLesson}
        removeLesson={this.removeLesson}
        handleSubmit={this.handleSubmit}
        handleClassChange={this.handleClassChange}
      />
    );
  }
}

export default ClassFormContainer;