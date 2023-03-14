function moving(input) {
  let index = 0;
  let length = Number(input[index]);
  index++;
  let width = Number(input[index]);
  index++;
  let height = Number(input[index]);
  index++;
  let totalVolume = length * width * height;
  let command = input[index];
  index++;
  let boxCounter = 0;

  while (command !== "Done") {
    nextMove = Number(command);
    boxCounter += nextMove;

    if (boxCounter > totalVolume) {
      let cubicsNeed = boxCounter - totalVolume;
      console.log(
        `No more free space! You need ${cubicsNeed} Cubic meters more.`
      );
      return;
    }

    command = input[index];
    index++;
  }
  if (command === "Done" && totalVolume > boxCounter) {
    let cubicLeft = totalVolume - boxCounter;
    console.log(`${cubicLeft} Cubic meters left.`);
  }
}

// moving(["10", "10", "2", "20", "20", "20", "20", "122"]);
moving(["10", "1", "2", "4", "6", "Done"]);
