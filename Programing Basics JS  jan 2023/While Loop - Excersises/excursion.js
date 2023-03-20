function excursion(input) {
  let index = 0;
  let seaTripCount = Number(input[index]);
  index++;
  let mountainTripCount = Number(input[index]);
  index++;
  let command = input[index];
  index++;
  let sum = 0;

  while (command !== "Stop") {
    let tripType = command;

    if (tripType == "sea") {
      if (seaTripCount == 0) {
        command = input[index];
        index++;
        continue;
      }
      sum += 680;
      seaTripCount -= 1;
    }

    if (tripType == "mountain") {
      if (mountainTripCount == 0) {
        command = input[index];
        index++;
        continue;
      }
      sum += 499;
      mountainTripCount -= 1;
    }

    if (mountainTripCount == 0 && seaTripCount == 0) {
      break;
    }

    command = input[index];
    index++;
  }
  if (mountainTripCount == 0 && seaTripCount == 0) {
    console.log(`Good job! Everything is sold.`);
    console.log(`Profit: ${sum} leva.`);
  }
  if (command == "Stop") {
    console.log(`Profit: ${sum} leva.`);
  }
}

excursion(["2", "2", "sea", "mountain", "sea", "sea", "mountain"]);
excursion(["6", "3", "sea", "mountain", "mountain", "mountain", "sea", "Stop"]);
