import moment from 'moment';

export const objToArray = obj => {
  if (!obj || Array.isArray(obj)) {
    return obj;
  } else {
    return Object.keys(obj).map(key => {
      const item = { ...obj[key] };
      item.id = key;
      return item;
    });
  }
};

export const sortClassesByDate = array => {
  return array.sort((a, b) => {
    if (a.date > b.date) {
      return 1;
    } else if (a.date < b.date) {
      return -1;
    } else {
      // if dates are same, group comes before class
      return a.endDate ? -1 : 1;
    }
  });
};

export const formatDate = (date, showDay) => {
  if (showDay) {
    return moment(date).format('dddd, MMMM Do');
  } else {
    return moment(date).format('MMMM Do');
  }
};

export const formatDateRange = (start, end) => {
  const startDay = formatDate(start);
  const endDay = formatDate(end);
  return startDay + ' - ' + endDay;
};

export const formatTimeRange = (start, end) => {
  const startTime = moment(start, 'hh:mm').format('h:mma');
  const endTime = moment(end, 'hh:mm').format('h:mma');
  return startTime + ' - ' + endTime;
};
