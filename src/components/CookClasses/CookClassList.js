import React from 'react';
import { CookClass } from './CookClass';
import {
  objToArray,
  sortClassesByDate
} from 'utils/functions';

export default function CookClassList(props) {
  // turn objects into arrays
  const classesArray = objToArray(props.classes);
  const groupsArray = props.groups
    ? objToArray(props.groups)
    : null;

  // give each group a start and end date
  // so we can sort them with classes as one array
  let datedGroups = [];
  if (groupsArray) {
    datedGroups = groupsArray.map(originalGroup => {
      const group = { ...originalGroup };
      const dateArray = [];
      // create array of class dates
      group.classes.forEach(classId => {
        classesArray.forEach(cookClass => {
          if (classId === cookClass.id) {
            dateArray.push(cookClass.date);
          }
        });
      });
      // sort dates
      const dates = dateArray.sort((a, b) => {
        return a > b ? 1 : -1;
      });
      // put date range on object
      group.date = dates[0];
      group.endDate = dates[dateArray.length - 1];
      return group;
    });
  }

  // combine arrays
  const classesAndGroups = classesArray.concat(datedGroups);

  // sort by date, with groups taking priority
  const classes = sortClassesByDate(classesAndGroups);

  return (
    <div>
      {classesAndGroups.map(cookClass =>
        <CookClass
          {...cookClass}
          key={cookClass.id}
          isAdmin={props.isAdmin}
        />
      )}
    </div>
  );
}
