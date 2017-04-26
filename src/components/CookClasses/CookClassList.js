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
  return (
    <div>
      {classesArray.map(obj => <CookClass {...obj} key={obj.id} />)}
    </div>
  );
}
