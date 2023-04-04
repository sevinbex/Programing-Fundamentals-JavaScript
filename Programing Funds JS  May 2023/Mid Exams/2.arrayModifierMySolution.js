function modifier(input) {
  let toModify = input.shift().split(" ").map(Number);
  let command = input.shift();

  while (command != "end") {
    let modifier = command.split(" ");
    let action = modifier[0];
    let index1 = Number(modifier[1]);
    let index2 = Number(modifier[2]);

    switch (action) {
      case "swap":
        let secondElement = toModify.splice(index2, 1, toModify[index1]);
        let secondElementNumber = secondElement[0];
        toModify.splice(index1, 1, secondElementNumber);
        break;
      case "multiply":
        if (index1 > index2) {
          let elementToMultiply = Number(toModify.splice(index1, 1));
          let multipliedResult = elementToMultiply * toModify[index2];
          toModify.splice(index1, 0, multipliedResult);
        } else {
          let elementToMultiply = Number(toModify.splice(index1, 1));
          let multipliedResult = elementToMultiply * toModify[index2 - 1];
          toModify.splice(index1, 0, multipliedResult);
        }
        break;
      case "decrease":
        toModify = toModify.map((el) => el - 1);
        break;
    }

    command = input.shift();
  }
  console.log(toModify.join(", "));
}

modifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);
