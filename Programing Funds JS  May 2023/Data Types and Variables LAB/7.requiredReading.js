function reading(booksTotalPages, readPerHour, days) {
  let totalHoursNeed = booksTotalPages / readPerHour;
  let pagesPerDayNeed = totalHoursNeed / days;

  console.log(pagesPerDayNeed);
}

reading(212, 20, 2);
reading(432, 15, 4);
