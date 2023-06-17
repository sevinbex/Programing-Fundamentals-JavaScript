function lastStop(input) {
  let paintingNums = input.shift().split(" ").map(Number);
  let commandLine = input.shift();

  while (commandLine !== "END") {
    let [command, arg1, arg2] = commandLine.split(" ");
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    if (command === "Insert") {
      let index = arg1;
      if (index > -1 && index <= paintingNums.length - 1) {
        paintingNums.splice(index + 1, 0, arg2);
      }
    } else if (command === "Switch") {
      let index1 = paintingNums.indexOf(arg1);
      let index2 = paintingNums.indexOf(arg2);
      if (index1 > -1 && index2 > -1) {
        let temp = paintingNums[index1];
        paintingNums[index1] = paintingNums[index2];
        paintingNums[index2] = temp;
      }
    } else if (command === "Hide") {
      let index = paintingNums.indexOf(arg1);
      if (index > -1) {
        paintingNums.splice(index, 1);
      }
    } else if (command === "Reverse") {
      paintingNums = paintingNums.reverse();
    } else if (command === "Change") {
      let index = paintingNums.indexOf(arg1);
      if (index > -1) {
        paintingNums[index] = arg2;
      }
    }

    commandLine = input.shift();
  }

  console.log(paintingNums.join(" "));
}
