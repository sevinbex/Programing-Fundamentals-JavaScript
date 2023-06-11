function aModifier(input) {
  let myArray = input.shift().split(" ").map(Number);
  let command = input.shift();

  while (command !== "end") {
    // let [operation, first, second] = command.split(" ");
    let operations = command.split(" ");
    let operation = operations[0];
    let index1 = Number(operations[1]);
    let index2 = Number(operations[2]);
    switch (operation) {
      case "swap":
        let secondToSwap = myArray.splice(index2, 1, myArray[index1]);
        let secondElementNumber = secondToSwap[0];
        myArray.splice(index1, 1, secondElementNumber);

        break;
      case "multiply":
        if (index1 < index2) {
          let secondToMultiply = Number(myArray.slice(index2, index2 + 1));
          let firstToMultiply = Number(myArray.slice(index1, index1 + 1));
          let result = firstToMultiply * secondToMultiply;
          myArray.splice(index1, 1, result);
        } else {
          let firstToMultiply = Number(myArray.slice(index1, index1 + 1));
          let secondToMultiply = Number(myArray.slice(index2, index2 + 1));
          let result = firstToMultiply * secondToMultiply;
          myArray.splice(index1, 1, result);
        }
        break;
      case "decrease":
        myArray = myArray.map((el) => el - 1);

        break;
    }
    command = input.shift();
  }
  console.log(myArray.join(", "));
}

aModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

aModifier([
  "1 2 3 4",
  "swap 0 1",
  "swap 1 2",
  "swap 2 3",
  "multiply 1 2",
  "decrease",
  "end",
]);
