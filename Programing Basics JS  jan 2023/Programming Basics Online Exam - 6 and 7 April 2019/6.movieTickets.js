function movieTickets(input) {
  let index = 0;
  let command = input[index];
  index++;
  let totalTickets = 0;
  let kid = 0;
  let standard = 0;
  let student = 0;

  while (command !== "Finish") {
    let movieTittle = command;
    let totalPlaces = Number(input[index]);
    let placesTaken = 0;
    index++;
    let command1 = input[index];
    index++;
    while (command1 !== "End") {
      let ticketType = command1;
      switch (ticketType) {
        case "standard":
          standard++;
          placesTaken++;
          totalTickets++;
          break;
        case "kid":
          kid++;
          placesTaken++;
          totalTickets++;
          break;
        case "student":
          student++;
          placesTaken++;
          totalTickets++;
          break;
      }
      if (placesTaken >= totalPlaces) {
        break;
      }

      command1 = input[index];
      index++;
    }

    command = input[index];
    index++;
    let percentageFull = (placesTaken / totalPlaces) * 100;
    console.log(`${movieTittle} - ${percentageFull.toFixed(2)}% full.`);
  }
  if (command === "Finish") {
    console.log(`Total tickets: ${totalTickets}`);
    let kidsPercentage = (kid / totalTickets) * 100;
    let standardPercentage = (standard / totalTickets) * 100;
    let studentPercentage = (student / totalTickets) * 100;
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
  }
}

// movieTickets([
//   "Taxi",
//   "10",
//   "standard",
//   "kid",
//   "student",
//   "student",
//   "standard",
//   "standard",
//   "End",
//   "Scary Movie",
//   "6",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "student",
//   "Finish",
// ]);

movieTickets([
  "The Matrix",
  "20",
  "student",
  "standard",
  "kid",
  "kid",
  "student",
  "student",
  "standard",
  "student",
  "End",
  "The Green Mile",
  "17",
  "student",
  "standard",
  "standard",
  "student",
  "standard",
  "student",
  "End",
  "Amadeus",
  "3",
  "standard",
  "standard",
  "standard",
  "Finish",
]);
