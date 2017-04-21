import React from 'react';
import {CookClass} from './CookClass';

export default function CookClassList(props) {
  console.log('cookclasslist');
  // convert classes obj to array
  const classesArray = Object.keys(props.classes).map(key => {
    const obj = props.classes[key];
    obj.id = key;
    // convert lessons and regs to arrays
    obj.lessons = obj.lessons
      ? Object.keys(obj.lessons).map(key => obj.lessons[key])
      : [];
    return obj;
  });
  return (
    <div>
      {classesArray.map(obj => {
        return <CookClass {...obj} key={obj.id} />;
      })}
    </div>
  );
}
