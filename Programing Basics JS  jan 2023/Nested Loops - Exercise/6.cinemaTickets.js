function cinemaTickets(input) {
  let index = 0;

  let command = input[index];
  index++;

  let standardTickets = 0;
  let studentTickets = 0;
  let kidTickets = 0;

  while (command !== "Finish") {
    let movieTitle = command;
    let freePlaces = Number(input[index]);
    index++;
    let spacesTaken = 0;
    let command1 = input[index];
    index++;
    while (command1 !== "End") {
      let ticketType = command1;

      if (ticketType === "standard") {
        standardTickets++;
      } else if (ticketType === "kid") {
        kidTickets++;
      } else {
        studentTickets++;
      }

      spacesTaken++;

      if (spacesTaken === freePlaces) {
        break;
      }

      command1 = input[index];
      index++;
    }

    let percentFull = (spacesTaken / freePlaces) * 100;
    console.log(`${movieTitle} - ${percentFull.toFixed(2)}% full.`);
    command = input[index];
    index++;
  }
  let totalTickets = studentTickets + standardTickets + kidTickets;
  console.log(`Total tickets: ${totalTickets}`);
  let studentTicketsPercent = (studentTickets / totalTickets) * 100;
  let kidsTicketsPercent = (kidTickets / totalTickets) * 100;
  let standardTicketsPercent = (standardTickets / totalTickets) * 100;

  console.log(`${studentTicketsPercent.toFixed(2)}% student tickets.`);
  console.log(`${standardTicketsPercent.toFixed(2)}% standard tickets.`);
  console.log(`${kidsTicketsPercent.toFixed(2)}% kids tickets.`);
}

cinemaTickets([
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
