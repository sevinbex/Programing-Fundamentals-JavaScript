function meetings(list) {
  const meetingsToday = {};

  for (const person of list) {
    let [dayOfWeek, name] = person.split(" ");
    // meetingsToday[dayOfWeek] = name;

    if (meetingsToday.hasOwnProperty(dayOfWeek)) {
      console.log(`Conflict on ${dayOfWeek}!`);
      continue;
    }

    console.log(`Scheduled for ${dayOfWeek}`);
    meetingsToday[dayOfWeek] = name;
  }

  for (const appointments in meetingsToday) {
    // console.log(appointments, meetingsToday[appointments]);
    console.log(`${appointments} -> ${meetingsToday[appointments]}`);
  }
}
meetings(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
