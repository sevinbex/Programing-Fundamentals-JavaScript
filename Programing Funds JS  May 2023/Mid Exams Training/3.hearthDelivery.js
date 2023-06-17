function hearthDelivery(input) {
  let neighborhood = input.shift().split("@").map(Number);
  let lastIndex = 0;
  let command = input.shift();
  let failCounter = 0;

  while (command !== "Love!") {
    let tokens = command.split(" ");
    let index = Number(tokens[1]);
    let houseIndex = index + lastIndex;
    if (houseIndex < neighborhood.length) {
      neighborhood[houseIndex] -= 2;
      if (neighborhood[houseIndex] < 0) {
        neighborhood[houseIndex] = 0;
        console.log(`Place ${houseIndex} already had Valentine's day.`);
      } else if (neighborhood[houseIndex] == 0) {
        console.log(`Place ${houseIndex} has Valentine's day.`);
      }
      lastIndex = houseIndex;
    } else {
      houseIndex = 0;
      if (neighborhood[houseIndex] == 0) {
        console.log(`Place ${houseIndex} already had Valentine's day.`);
      } else {
        neighborhood[houseIndex] -= 2;
        if (neighborhood[houseIndex] == 0) {
          console.log(`Place ${houseIndex} has Valentine's day.`);
        }
      }
    }
    lastIndex = houseIndex;
    command = input.shift();
  }
  for (const house of neighborhood) {
    if (house != 0) {
      failCounter++;
    }
  }
  console.log(`Cupid's last position was ${lastIndex}.`);
  if (failCounter > 0) {
    console.log(`Cupid has failed ${failCounter} places.`);
  } else {
    console.log("Mission was successful.");
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
