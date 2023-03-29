function manipulations(commands) {
  let myArray = commands.shift().split(" ").map(Number);

  for (let i = 0; i < commands.length; i++) {
    let [command, firstNum, secondNum] = commands[i].split(" ");

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    switch (command) {
      case "Add":
        myArray.push(firstNum);
        break;
      case "Remove":
        for (let i = 0; i < myArray.length; i++) {
          if (myArray[i] === firstNum) {
            myArray.splice(i, 1);
          }
        }
        break;
      case "RemoveAt":
        myArray.splice(firstNum, 1);
        break;
      case "Insert":
        myArray.splice(secondNum, 0, firstNum);
        break;
    }
  }
  console.log(myArray.join(" "));
}

// manipulations([
//   "4 19 2 53 6 43",

//   "Add 3",

//   "Remove 2",

//   "RemoveAt 1",

//   "Insert 8 3",
// ]);

manipulations([
  "6 12 2 65 6 42",

  "Add 8",

  "Remove 12",

  "RemoveAt 3",

  "Insert 6 2",
]);
