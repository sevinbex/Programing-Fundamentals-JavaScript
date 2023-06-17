function shootForWin(input) {
  let targets = input.shift().split(" ").map(Number);
  //   console.log(targets);
  let count = 0;
  let command = input.shift();

  while (command != "End") {
    let shot = Number(command);
    if (shot >= 0 && shot < targets.length) {
      for (let i = 0; i < targets.length; i++) {
        if (shot == i || targets[i] == -1) {
          continue;
        } else if (targets[shot] >= targets[i]) {
          targets[i] += targets[shot];
        } else {
          targets[i] -= targets[shot];
        }
      }
      targets[shot] = -1;
      count += 1;
    }
    command = input.shift();
  }
  console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);
}

shootForWin(["24 50 36 70", "0", "4", "3", "1", "End"]);
shootForWin(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
