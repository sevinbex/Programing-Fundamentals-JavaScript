function movingTarget(array) {
  let targets = array.shift().split(" ").map(Number);
  let command = array.shift();

  while (command !== "End") {
    let commands = command.split(" ");
    let action = commands[0];
    let index = Number(commands[1]);
    let value = Number(commands[2]);

    switch (action) {
      case "Shoot":
        shoot(index, value);
        break;
      case "Strike":
        strike(index, value);
        break;
      case "Add":
        add(index, value);
        break;
    }

    command = array.shift();
  }

  function shoot(index, power) {
    if (targets[index]) {
      targets[index] -= power;
      if (targets[index] <= 0) {
        targets.splice(index, 1);
      }
    }
  }

  function add(index, value) {
    if (targets[index]) {
      targets.splice(index, 0, value);
    } else {
      console.log("Invalid placement!");
    }
  }

  function strike(index, radius) {
    let lowerIndex = index - radius;
    let upperIndex = index + radius;
    if (targets[lowerIndex] && targets[upperIndex]) {
      targets.splice(lowerIndex, radius * 2 + 1);
    } else {
      console.log("Strike missed!");
    }
  }
  console.log(targets.join("|"));
}

// if (targets[lowerIndex] && targets[upperIndex]) {
//   targets.splice(lowerIndex, radius * 2 + 1);
// } else {
//   console.log("Strike missed!");
// }

movingTarget([
  "52 74 23 44 96 110",
  "Shoot 5 10",
  "Shoot 1 80",
  "Strike 2 1",
  "Add 22 3",
  "End",
]);

movingTarget(["1 2 3 4 5", "Strike 0 1", "End"]);
