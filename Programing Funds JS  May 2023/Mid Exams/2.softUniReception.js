function reception(input) {
  let firstReceptionistForHour = Number(input[0]);
  let secondReceptionistForHour = Number(input[1]);
  let thirdReceptionistForHour = Number(input[2]);
  let customers = Number(input[3]);

  let customersDoneFor1H =
    firstReceptionistForHour +
    secondReceptionistForHour +
    thirdReceptionistForHour;
  let hourCounter = 0;
  while (customers > 0) {
    hourCounter += 1;
    if (hourCounter % 4 == 0 && hourCounter != 0) {
      continue;
    }
    customers -= customersDoneFor1H;

    // console.log(`Time needed: ${hourCounter}h.`);
  }
  console.log(`Time needed: ${hourCounter}h.`);
}

reception(["5", "6", "4", "20"]);
reception(["1", "2", "3", "45"]);
reception(["3", "2", "5", "40"]);
