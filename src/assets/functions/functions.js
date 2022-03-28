export const convertTimestampToDate = (timestamp) => {
  let convertedDate = [];

  let newDate = new Date(timestamp);

  convertedDate.push(
    newDate.getMonth() +
      1 +
      "/" +
      newDate.getDate() +
      "/" +
      newDate.getFullYear() +
      " " +
      newDate.getHours() +
      ":" +
      newDate.getMinutes() +
      ":" +
      newDate.getSeconds()
  );

  return convertedDate;
};
