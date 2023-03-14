function sumNumbers(input) {
  let index = 0;
  let maxNumber = Number(input[index]);
  index++;
  let command = Number(input[index]);
  index++;
  let sum = 0;

  while (sum < maxNumber) {
    sum += command;

    command = Number(input[index]);
    index++;
  }
  console.log(sum);
}

sumNumbers(["100", "10", "20", "30", "40"]);
sumNumbers(["20", "1", "2", "3", "4", "5", "6"]);
