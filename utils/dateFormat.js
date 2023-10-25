const dayjs = require("dayjs");

const dateFormat = (date) => {
  //variables format each section of the UTC timestamp to be compiled below
  const month = dayjs(date).format("dddd, MMM");
  const day = dayjs(date).format("D");
  const year = dayjs(date).format("YYYY");
  const time = dayjs(date).format("h:mm A");

  const dayString = day.toString();

  const lastChar = dayString.charAt(dayString.length - 1);

  //following if else statement adds the appropriate suffix to the day portion of the date
  let dayFormat;
  if (lastChar === "1" && dayString !== "11") {
    dayFormat = `${day}st`;
  } else if (lastChar === "2" && dayString !== "12") {
    dayFormat = `${day}nd`;
  } else if (lastChar === "3" && dayString !== "13") {
    dayFormat = `${day}rd`;
  } else {
    dayFormat = `${day}th`;
  }

  //returns the newly formatted timestamp
  return `${month} ${dayFormat} ${year} at ${time}`;
};

module.exports = dateFormat;
