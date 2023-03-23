function dayOfWeek(input) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let currentDay = days[input - 1];

  if (input > 0 && input < 8) {
    console.log(currentDay);
  } else {
    console.log("Invalid day!");
  }
}
dayOfWeek(0);
