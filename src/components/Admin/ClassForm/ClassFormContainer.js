import React from 'react';
import ClassForm from './ClassForm';

class ClassFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      endDate: '',
      start: '',
      end: '',
      theme: '',
      lessons: ['a', 'b']
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLessonChange = this.handleLessonChange.bind(
      this
    );
    this.addLesson = this.addLesson.bind(this);
  }
  handleChange(field, e) {
    this.setState((prevState, props) => {
      const test = e.target.value;
      this.setState({ end: 'test' });
      // let newState = { ...prevState };
      // newState[field] = e.target.value;
      // return newState;
    });
  }
  handleLessonChange(index, e) {
    // this.setState((prevState, props) => {
    //   let newState = { ...prevState };
    //   newState.lessons[index] = e.target.value;
    //   return newState;
    // });
  }
  addLesson() {
    // this.setState((prevState, props) => {
    //   let newState = { ...prevState };
    //   newState.lessons.push('');
    //   return newState;
    // });
  }
  render() {
    return (
      <ClassForm
        {...this.state}
        handleChange={this.handleChange}
        handleLessonChange={this.handleLessonChange}
        addLesson={this.addLesson}
      />
    );
  }
}

export default ClassFormContainer;
