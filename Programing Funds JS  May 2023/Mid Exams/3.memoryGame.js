function memoryGame(input) {
  let elements = input.shift().split(" ");
  let command = input.shift();
  let moveCounter = 0;

  while (command != "end") {
    let indexes = command.split(" ");
    let index1 = Number(indexes[0]);
    let index2 = Number(indexes[1]);
    moveCounter += 1;
    if (!elements[index1] || !elements[index2] || index1 == index2) {
      console.log("Invalid input! Adding additional elements to the board");
      elements.splice(
        elements.length / 2,
        0,
        `-${moveCounter}a`,
        `-${moveCounter}a`
      );
    } else {
      if (elements[index1] == elements[index2]) {
        console.log(
          `Congrats! You have found matching elements - ${elements[index1]}!`
        );
        if (index1 > index2) {
          elements.splice(index1, 1);
          elements.splice(index2, 1);
        } else {
          elements.splice(index2, 1);
          elements.splice(index1, 1);
        }
      } else {
        console.log("try again");
      }
    }
    if (elements.length == 0) {
      break;
    }
    command = input.shift();
  }
  if (elements.length > 0) {
    console.log("Sorry you lose :(");
  } else {
    console.log(`You have won in ${moveCounter} turns!`);
  }
  console.log(elements.join(" "));
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
