import React from 'react';
import Header from './CookClassHeader';
import Body from './CookClassBodyContainer';
import {
  formatDate,
  formatDateRange,
  formatTimeRange
} from 'utils/functions';

export default function CookClassBox(props) {
  const isGroup = props.endDate ? true : false;
  const color = isGroup ? '#177db0' : '#E10C18';
  const styles = {
    container: {
      padding: '0 10px'
    },
    box: {
      border: `3px solid ${color}`,
      borderRadius: '15px',
      margin: '10px auto',
      overflow: 'hidden',
      maxWidth: '500px'
    }
  };
  // format properly
  const price = props.price ? '$' + props.price : null;
  const common = {
    id: props.id,
    isAdmin: props.isAdmin,
    isGroup: isGroup,
    color: color
  };
  const header = {
    title: isGroup
      ? formatDateRange(props.date, props.endDate)
      : formatDate(props.date, true),
    subtitle: isGroup
      ? props.subtitle
      : props.subtitle ||
          formatTimeRange(props.start, props.end),
    ...common
  };
  const body = {
    description: props.description,
    lessons: props.lessons,
    heading: props.theme,
    headingRight: price,
    registered: props.registered,
    ...common
  };
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <Header {...header} />
        <Body {...body} />
      </div>
    </div>
  );
}
