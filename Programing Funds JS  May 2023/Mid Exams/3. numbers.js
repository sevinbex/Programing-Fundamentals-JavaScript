function findAboveAverage(input) {
  let numbers = input.split(" ").map(Number);
  let sum = numbers.reduce((acc, cur) => acc + cur, 0);
  let average = sum / numbers.length;
  let newArray = [];
  let greaterNumberCounter = true;
  for (let i = 0; i <= numbers.length; i++) {
    let currNumber = Number(numbers[i]);

    if (currNumber > average) {
      newArray.push(currNumber);
      greaterNumberCounter = false;
    }
  }

  if (greaterNumberCounter) {
    console.log("No");
  }
  newArray.sort((a, b) => b - a);
  let first5 = newArray.splice(0, 5);
  console.log(first5.join(" "));
}

findAboveAverage("10 20 30 40 50");
findAboveAverage("5 2 3 4 -10 30 40 50 20 50 60 60 51");
findAboveAverage("1");
findAboveAverage("-1 -2 -3 -4 -5 -6");
