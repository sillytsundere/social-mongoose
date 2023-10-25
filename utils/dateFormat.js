const dayjs = require("dayjs");

const dateFormat = (date) => {
  const month = dayjs(date).format("dddd, MMM");
  const day = dayjs(date).format("D");
  const year = dayjs(date).format("YYYY");
  const time = dayjs(date).format("h:mm A");

  const dayString = day.toString();

  const lastChar = dayString.charAt(dayString.length - 1);

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

  return `${month} ${dayFormat} ${year} at ${time}`;
};

module.exports = dateFormat;
