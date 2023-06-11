function reception(input) {
  let first = Number(input[0]);
  let second = Number(input[1]);
  let third = Number(input[2]);
  let studentsCount = Number(input[3]);
  let debitPerHour = first + second + third;
  let hourCounter = 0;

  while (studentsCount > 0) {
    hourCounter++;
    if (hourCounter % 4 == 0 && hourCounter != 0) {
      continue;
    }
    studentsCount -= debitPerHour;
  }
  console.log(`Time needed: ${hourCounter}h.`);
}

reception(["1", "2", "3", "45"]);
reception(["3", "2", "5", "40"]);
reception(["5", "6", "4", "20"]);
