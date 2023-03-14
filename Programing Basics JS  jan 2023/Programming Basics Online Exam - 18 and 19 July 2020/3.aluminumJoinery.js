function aj(input) {
  let count = Number(input[0]);
  let type = input[1];
  let deliveryOption = input[2];
  let sum = 0;

  if (count < 10) {
    console.log("Invalid order");
    return;
  }

  switch (type) {
    case "90X130":
      sum = count * 110;
      if (count > 60) {
        sum *= 0.92;
      } else if (count > 30) {
        sum *= 0.95;
      }
      if (deliveryOption == "With delivery") {
        sum += 60;
      }
      break;
    case "100X150":
      sum = count * 140;
      if (count > 80) {
        sum *= 0.9;
      } else if (count > 40) {
        sum *= 0.94;
      }
      if (deliveryOption == "With delivery") {
        sum += 60;
      }
      break;
    case "130X180":
      sum = count * 190;
      if (count > 50) {
        sum *= 0.88;
      } else if (count > 20) {
        sum *= 0.93;
      }
      if (deliveryOption == "With delivery") {
        sum += 60;
      }
      break;
    case "200X300":
      sum = count * 250;
      if (count > 50) {
        sum *= 0.86;
      } else if (count > 25) {
        sum *= 0.91;
      }
      if (deliveryOption == "With delivery") {
        sum += 60;
      }
      break;
  }

  if (count > 99) {
    sum *= 0.96;
  }
  console.log(`${sum.toFixed(2)} BGN`);
}

// aj(["40", "90X130", "Without delivery"]);
aj(["105", "100X150", "With delivery"]);
// aj(["2", "130X180", "With delivery"]);
