import React from 'react';
import GroupClassBoxes from './GroupClassBoxes';
import { FirebaseListener } from 'components/FirebaseCustom';
import FieldGroup from '../FieldGroup';
import { browserHistory } from 'react-router';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';
import {
  sortClassesByDate,
  objToArray
} from 'utils/functions';

export default function ClassForm(props) {
  const styles = {
    classBoxes: {
      marginBottom: '10px'
    },
    lessonFields: {
      margin: '0'
    },
    lessonBtnContainer: {
      margin: '20px',
      display: 'flex',
      justifyConent: 'center'
    },
    lessonBtn: {
      flex: '1',
      margin: '5px'
    },
    submitBtnContainer: {
      textAlign: 'right',
      margin: '30px 0'
    }
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <h4>Select Classes</h4>
      <div style={styles.classBoxes}>
        <FirebaseListener
          path="classes"
          transform={data =>
            sortClassesByDate(objToArray(data))}
          passDataAs="classes"
        >
          <GroupClassBoxes
            groupClassIds={props.classes}
            groupId={props.groupId}
            handleClick={props.handleClassChange}
          />
        </FirebaseListener>
      </div>
      <FieldGroup
        name="theme"
        label="Theme"
        val={props.theme}
        help="A theme or short title for this class"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="subtitle"
        label="Subtitle"
        val={props.subtitle}
        help="This will appear just below the date range"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="description"
        label="Description"
        componentClass="textarea"
        val={props.description}
        help="Anything you want to say that doesn't fit in the other fields"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="price"
        label="Price"
        val={props.price}
        help="Do not include a dollar sign"
        onChange={props.handleChange}
      />
      {props.lessons.map((lesson, i) => {
        return (
          <FieldGroup
            key={i}
            name={`lesson ${i}`}
            val={props.lessons[i]}
            label={i === 0 ? 'Lessons' : null}
            onChange={props.handleLessonChange}
            style={styles.lessonFields}
          />
        );
      })}
      <div style={styles.lessonBtnContainer}>
        <Button
          type="button"
          bsStyle="success"
          bsSize="sm"
          onClick={props.addLesson}
          style={styles.lessonBtn}
        >
          + Add Lesson
        </Button>
        <Button
          type="button"
          bsStyle="danger"
          bsSize="sm"
          disabled={
            props.lessons.length === 1 ? true : false
          }
          onClick={props.removeLesson}
          style={styles.lessonBtn}
        >
          - Remove Lesson
        </Button>
      </div>
      <div style={styles.submitBtnContainer}>
        <Button
          type="button"
          bsStyle="danger"
          bsSize="lg"
          style={{ marginRight: '10px' }}
          onClick={props.handleDelete}
        >
          Delete
        </Button>
        <Button
          type="button"
          bsStyle="warning"
          bsSize="lg"
          style={{ marginRight: '10px' }}
          onClick={() => browserHistory.push('/admin')}
        >
          Cancel
        </Button>
        <Button type="submit" bsStyle="primary" bsSize="lg">
          Submit
        </Button>
      </div>
    </form>
  );
}
