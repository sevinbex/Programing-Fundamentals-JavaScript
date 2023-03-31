function memoryGame(input) {
  let elements = input[0].split(" ").map(Number);
  let moves = 0;

  while (true) {
    let [i, j] = input[moves + 1].split(" ").map(Number);

    if (
      i < 0 ||
      i >= elements.length ||
      j < 0 ||
      j >= elements.length ||
      i === j ||
      elements[i] === undefined ||
      elements[j] === undefined
    ) {
      let extraElements = `-${moves}a -${moves}a`;
      elements.splice(elements.length / 2, 0, extraElements);
      console.log("Invalid input! Adding additional elements to the board");
    } else {
      if (elements[i] === elements[j]) {
        console.log(
          `Congrats! You have found matching elements - ${elements[i]}!`
        );
        elements.splice(Math.max(i, j), 1);
        elements.splice(Math.min(i, j), 1);
      } else {
        console.log("Try again!");
      }
      moves++;
    }

    if (elements.length === 0) {
      console.log(`You have won in ${moves} turns!`);
      break;
    } else if (input[moves + 1] === "end") {
      console.log(`Sorry you lose :(\n${elements.join(" ")}`);
      break;
    }
  }
}

memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
