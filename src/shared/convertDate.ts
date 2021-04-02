export const convertDate = (date: any) => {
  var months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  var format = new Date(date);
  var day = format.getDate();
  var month = months[format.getMonth()];
  var hour = format.getHours();
  var ampm = hour >= 12 ? 'PM' : 'AM';
  hour = hour % 12;
  hour = hour ? hour : 12;
  var minute: any = format.getMinutes();
  minute = minute < 10 ? '0' + minute : minute;
  const formatted_date =
    day + ' ' + month + ', ' + hour + ':' + minute + ' ' + ampm;
  return formatted_date;
};
