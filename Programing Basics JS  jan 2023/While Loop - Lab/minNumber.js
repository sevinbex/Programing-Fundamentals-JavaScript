function myMinNumber(input) {
  let index = 0;

  let command = input[index];
  index++;

  let myMinumumNumber = Number.MAX_SAFE_INTEGER;

  while (command !== "Stop") {
    let num = Number(command);
    if (myMinumumNumber > num) {
      myMinumumNumber = num;
    }
    command = input[index];
    index++;
  }
  console.log(myMinumumNumber);
}
