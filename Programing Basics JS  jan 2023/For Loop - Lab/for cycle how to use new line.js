function numbsTo9(input) {
  let low = Number(input[0]);
  let high = Number(input[1]);
  let sum = 0;
  let outputNumbers = "";

  for (low; low <= high; low++) {
    if (low % 9 == 0) {
      sum = sum + low;
      outputNumbers = outputNumbers + low + "\n";
    }
  }
  console.log(`The sum: ${sum}`);
  console.log(outputNumbers);
}

numbsTo9(["100", "200"]);
