function solve(number, precision) {
  if (precision > 15) {
    precision = 15;
  }
  let precisedNumber = number.toFixed(precision);
  console.log(parseFloat(precisedNumber));
}

solve(3.1415926535897932384626433832795, 2);
solve(10.5, 3);
