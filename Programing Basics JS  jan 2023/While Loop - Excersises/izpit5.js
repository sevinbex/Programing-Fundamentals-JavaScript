function everest(input) {
  let index = 0;
  let command = input[index];
  index++;
  //   let currentDayMeters = Number(input[index]);

  let dayCounter = 1;
  let currentHeight = 5364;

  while (command !== "END") {
    let decision = command;
    currentDayMeters = Number(input[index]);
    // currentHeight += currentDayMeters;

    if (decision === "Yes") {
      dayCounter += 1;
    }
    if (dayCounter > 5) {
      console.log(`Failed!`);
      console.log(`${currentHeight}`);
      return;
    }

    currentHeight += currentDayMeters;

    if (currentHeight >= 8848) {
      console.log(`Goal reached for ${dayCounter} days!`);
      return;
    }

    index++;
    command = input[index];
    index++;
    currentDayMeters = Number(input[index]);
  }
  if ((command = "END")) {
    console.log(`Failed!`);
    console.log(`${currentHeight}`);
  }
}

// everest(["Yes", "1254", "Yes", "1402", "No", "250", "Yes", "635"]);
// everest(["Yes", "1000", "Yes", "945", "No", "1200", "END"]);
everest(["Yes", "535", "Yes", "849", "Yes", "499", "Yes", "400", "Yes", "500"]);
