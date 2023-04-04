function hearthDelivery(input) {
  let houses = input.shift().split("@").map(Number);
  let command = input.shift();
  let position = 0;
  let lastPosition = 0;
  let houseCount = 0;
  while (command != "Love!") {
    let nextMove = command.split(" ");
    let indexOfHouse = Number(nextMove[1]);
    if (indexOfHouse + position < houses.length) {
      // дали индекса е валиден
      houses[indexOfHouse + position] -= 2;
      if (houses[indexOfHouse + position] < 0) {
        // дали след операцията стойността е 0
        console.log(
          `Place ${indexOfHouse + position} already had Valentine's day.`
        );
      } else if (houses[indexOfHouse + position] == 0) {
        console.log(`Place ${indexOfHouse + position} has Valentine's day.`);
      }
      position += indexOfHouse;
      lastPosition = position;
    } else {
      // невалиден индекс
      position = 0;
      houses[position] -= 2;
      lastPosition = position;
      if (houses[position] == 0) {
        console.log(`Place ${position} has Valentine's day.`);
        lastPosition = position;
      }
      if (houses[position] < 0) {
        houses[position] = 0;
        lastPosition = position;
        console.log(`Place ${position} already had Valentine's day.`);
      }
    }

    command = input.shift();
  }
  houses.map((el) => {
    if (el != 0) {
      houseCount++;
    }
  });
  console.log(`Cupid's last position was ${lastPosition}.`);
  if (houseCount == 0) {
    console.log("Mission was successful.");
  } else {
    console.log(`Cupid has failed ${houseCount} places.`);
  }
}

// hearthDelivery(["10@10@10@2", "Jump 1", "Jump 2", "Love!"]);
hearthDelivery([
  "2@4@2",
  "Jump 2",
  "Jump 2",
  "Jump 8",
  "Jump 3",
  "Jump 1",
  "Love!",
]);
