function counterStrike(array) {
  let energy = Number(array.shift());
  let gameCounter = 0;
  let command = array.shift();

  while (command !== "End of battle") {
    let energyToDown = Number(command);
    if (energy >= energyToDown) {
      energy -= energyToDown;
      gameCounter += 1;
    } else {
      console.log(
        `Not enough energy! Game ends with ${gameCounter} won battles and ${energy} energy`
      );
      return;
    }
    if (gameCounter % 3 == 0) {
      energy += gameCounter;
    }
    command = array.shift();
  }

  console.log(`Won battles: ${gameCounter}. Energy left: ${energy}`);
}

counterStrike(["100", "10", "10", "10", "1", "2", "3", "73", "10"]);
counterStrike(["200", "54", "14", "28", "13", "End of battle"]);
