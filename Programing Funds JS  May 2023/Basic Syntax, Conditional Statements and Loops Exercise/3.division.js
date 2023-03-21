function solve(number) {
  let divisor = 0;
  if (number % 10 === 0) {
    divisor = 10;
  } else if (number % 7 === 0) {
    divisor = 7;
  } else if (number % 6 === 0) {
    divisor = 6;
  } else if (number % 3 === 0) {
    divisor = 3;
  } else if (number % 2 === 0) {
    divisor = 2;
  } else {
    console.log("Not divisible");
    return;
  }
  console.log(`The number is divisible by ${divisor}`);
}

solve(30);
solve(15);
solve(12);
solve(1643);

// 2, 3, 6, 7, and 10.
