export default class CurrentDate {
  static dayName() {
    const currentDate = new Date();

    const weekdayNames = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const dayName = weekdayNames[currentDate.getDay()];

    return dayName;
  }

  static dayNumber() {
    const currentDate = new Date();

    const dayNumber = currentDate.getDate();

    return dayNumber;
  }

  static monthName() {
    const currentDate = new Date();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = monthNames[currentDate.getMonth()];

    return monthName;
  }
}
