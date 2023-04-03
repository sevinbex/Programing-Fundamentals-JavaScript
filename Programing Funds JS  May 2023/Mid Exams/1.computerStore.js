function compStore(input) {
  let command = input.shift();
  let sum = 0;
  let isSpecial = false;
  while (command != "special" && command != "regular") {
    // console.log(typeof command);
    currentPart = Number(command);
    if (currentPart > 0) {
      sum += currentPart;
    } else {
      console.log("Invalid price!");
    }

    command = input.shift();
    if (command == "special") {
      isSpecial = true;
    }
  }

  if (sum <= 0) {
    console.log("Invalid order!");
    return;
  }
  let taxes = sum * 0.2;
  let totalSum = taxes + sum;
  if (isSpecial) {
    totalSum *= 0.9;
  }

  console.log(`Congratulations you've just bought a new computer!`);
  console.log(`Price without taxes: ${sum.toFixed(2)}$`);
  console.log(`Taxes: ${taxes.toFixed(2)}$`);
  console.log("-----------");
  console.log(`Total price: ${totalSum.toFixed(2)}$`);
}

// compStore(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// compStore([
//   "1023",
//   "15",
//   "-20",
//   "-5.50",
//   "450",
//   "20",
//   "17.66",
//   "19.30",
//   "regular",
// ]);
compStore(["regular"]);
