function cake(input) {
  let index = 0;
  let length = Number(input[index]);
  index++;
  let width = Number(input[index]);
  index++;
  let sumOfCakePieces = length * width;
  let command = input[index];
  index++;
  let cakesTaken = 0;

  while (command !== "STOP") {
    let currentCount = Number(command);
    cakesTaken += currentCount;

    if (cakesTaken >= sumOfCakePieces) {
      let cakesNeed = cakesTaken - sumOfCakePieces;
      console.log(`No more cake left! You need ${cakesNeed} pieces more.`);
      return;
    }
    // if (command === "STOP" && cakesTaken < sumOfCakePieces) {
    //   let cakesLeft = sumOfCakePieces - cakesTaken;
    //   console.log(`${cakesLeft} pieces are left.`);
    // }

    command = input[index];
    index++;
  }

  if (command === "STOP" && cakesTaken < sumOfCakePieces) {
    let cakesLeft = sumOfCakePieces - cakesTaken;
    console.log(`${cakesLeft} pieces are left.`);
  }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);
cake(["10", "2", "2", "4", "6", "STOP"]);
