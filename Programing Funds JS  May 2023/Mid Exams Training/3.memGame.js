function memoryGame(input) {
  let elements = input.shift().split(" ");
  let moves = 0;
  let element = 0;
  let command = input.shift();

  while (command !== "end") {
    moves++;
    let next = command.split(" ");
    let firstIndex = Number(next[0]);
    let secondIndex = Number(next[1]);

    if (
      firstIndex === secondIndex ||
      firstIndex < 0 ||
      secondIndex < 0 ||
      firstIndex > elements.length - 1 ||
      secondIndex > elements.length - 1
    ) {
      elements.splice(elements.length / 2, 0, `-${moves}a`, `-${moves}a`);
      console.log("Invalid input! Adding additional elements to the board");
      command = input.shift();
      continue;
    }
    if (elements[firstIndex] === elements[secondIndex]) {
      element = elements[firstIndex];
      if (firstIndex > secondIndex) {
        elements.splice(firstIndex, 1);
        elements.splice(secondIndex, 1);
      } else {
        elements.splice(secondIndex, 1);
        elements.splice(firstIndex, 1);
      }
      console.log(`Congrats! You have found matching elements - ${element}!`);
    } else {
      console.log("Try again!");
    }

    if (elements.length == 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    }
    command = input.shift();
  }

  if (elements.length > 0) {
    console.log(`Sorry you lose :(`);
    console.log(elements.join(" "));
  }
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);
memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
