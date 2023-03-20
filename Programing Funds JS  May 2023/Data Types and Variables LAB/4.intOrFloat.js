function intOrFloat(num1, num2, num3) {
  let sum = num1 + num2 + num3;

  if (Number.isInteger(num1 + num2 + num3)) {
    console.log(`${sum} - Integer`);
  } else {
    console.log(`${sum} - Float`);
  }
}

intOrFloat(9, 100, 1.1);
intOrFloat(100, 200, 303);
