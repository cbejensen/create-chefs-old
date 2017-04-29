import React from 'react';
import {CookClass} from './CookClass';

export default function CookClassList(props) {
  // convert classes obj to array
  const classesArray = Object.keys(props.classes).map(key => {
    const obj = props.classes[key];
    obj.id = key;
    // convert lessons to arrays
    obj.lessons = obj.lessons
      ? Object.keys(obj.lessons).map(key => obj.lessons[key])
      : [];
    return obj;
  });
  // sort by date ascending
  const classes = classesArray.sort((a, b) => {
    return a.date > b.date ? 1 : -1;
  });
  return (
    <div>
      {classes.map(obj => <CookClass {...obj} key={obj.id} />)}
    </div>
  );
}
