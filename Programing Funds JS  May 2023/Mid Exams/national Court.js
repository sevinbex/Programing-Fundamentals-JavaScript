function solve(input) {
  let efficiencyOne = Number(input[0]); // count of people emplyee one can help per hour
  let efficiencyTwo = Number(input[1]); // count of people emplyee two can help per hour
  let efficiencyThree = Number(input[2]); // count of people emplyee three can help per hour
  let peopleCount = Number(input[3]); // total count of people
  let customersPerHourTotal = efficiencyOne + efficiencyTwo + efficiencyThree;
  // let hoursNeeded = Math.round(peopleCount/customersPerHourTotal)
  let totalHoursWorked = 0;

  while (peopleCount > 0) {
    totalHoursWorked++;

    if (totalHoursWorked % 4 == 0) {
      //  totalHoursWorked++
    } else {
      peopleCount -= customersPerHourTotal;
      if (peopleCount <= 0) {
        break;
      }
    }
  }

  console.log(`Time needed: ${totalHoursWorked}h.`);
}
