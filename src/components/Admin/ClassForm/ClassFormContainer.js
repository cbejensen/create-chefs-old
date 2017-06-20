import React from 'react';
import FieldGroup from '../FieldGroup';
import ClassForm from './ClassForm';
import * as firebase from 'firebase';

class ClassFormContainer extends React.Component {
  constructor(props) {
    super(props);
    const info = { ...this.props.cookClass };
    this.state = {
      date: info.date || '',
      start: info.start || '',
      end: info.end || '',
      theme: info.theme || '',
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
      .ref(`classes/${this.props.cookClass.id}`)
      .update(this.state);
  };
  render() {
    return (
      <ClassForm
        {...this.state}
        handleChange={this.handleChange}
        handleLessonChange={this.handleLessonChange}
        addLesson={this.addLesson}
        removeLesson={this.removeLesson}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default ClassFormContainer;