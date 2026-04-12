export const dateFormatLong = (date: string, time = false) => {
  const convertedDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };

  const optionsWithoutTime: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return convertedDate.toLocaleDateString(
    "default",
    time ? options : optionsWithoutTime
  );
};

export const isToday = (someDate: Date) => {
  const today = new Date();
  return (
    someDate.getDate() == today.getDate() &&
    someDate.getMonth() == today.getMonth() &&
    someDate.getFullYear() == today.getFullYear()
  );
};

export const asYearAndMonth = (startDate: Date, endDate: Date) => {
  let year = endDate.getFullYear() - startDate.getFullYear();
  let month;

  if (endDate.getMonth() < startDate.getMonth()) {
    year--;
    month = 12 - startDate.getMonth() + endDate.getMonth();
  } else {
    month = endDate.getMonth() - startDate.getMonth();
  }

  return year === 0 ? `${month} months` : `${year} years, ${month} months`;
};

export const asDayMonthYear = (date: Date) => {
  const day = `${date.getDate()}`.padStart(2, "0");
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
