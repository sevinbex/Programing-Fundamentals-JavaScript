function numbers(input) {
  let myArray = input.split(" ").map(Number);
  let overAverage = [];
  let sum = 0;
  for (const digit of myArray) {
    sum += digit;
  }
  let averageNumber = sum / myArray.length;

  myArray.sort((a, b) => b - a);

  for (let i = 0; i < 5; i++) {
    if (myArray[i] > averageNumber) {
      overAverage.push(myArray[i]);
    }
  }
  if (overAverage.length <= 0) {
    console.log("No");
  } else {
    console.log(overAverage.join(" "));
  }
}
numbers("10 20 30 40 50");
numbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
numbers("-1 -2 -3 -4 -5 -6");
numbers("1");
