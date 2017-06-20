import React from 'react';
import GroupClassBox from './GroupClassBox';
import { formatDate } from 'utils/functions';

export default function GroupClassBoxes(props) {
  return (
    <div>
      {props.classes.map(cookClass => {
        let active = false;
        props.groupClassIds.forEach(id => {
          if (id === cookClass.id) active = true;
        });
        const text = formatDate(cookClass.date);
        return (
          <GroupClassBox
            id={cookClass.id}
            key={cookClass.id}
            text={text}
            active={active}
            handleClick={() =>
              props.handleClick(cookClass.id)}
          />
        );
      })}
    </div>
  );
}
