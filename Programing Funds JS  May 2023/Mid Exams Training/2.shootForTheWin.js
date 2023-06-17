function sfw(array) {
  let targets = array.shift().split(" ").map(Number);
  let command = array.shift();
  let targetCounter = 0;
  while (command !== "End") {
    let shot = Number(command);

    if (shot >= 0 && shot < targets.length) {
      for (let i = 0; i < targets.length; i++) {
        if (i == shot || targets[i] == -1) {
          continue;
        } else if (targets[i] <= targets[shot]) {
          targets[i] += targets[shot];
        } else {
          targets[i] -= targets[shot];
        }
      }
      targets[shot] = -1;
      targetCounter++;
    }
    command = array.shift();
  }
  console.log(`Shot targets: ${targetCounter} -> ${targets.join(" ")}`);
}
sfw(["24 50 36 70", "0", "4", "3", "1", "End"]);
sfw(["30 30 12 60 54 66", "5", "2", "4", "0", "End"]);
