function calculator(input) {
  let peopleCount = Number(input[0]);
  let season = input[1];
  let sum = 0;

  switch (season) {
    case "spring":
      if (peopleCount <= 5) {
        sum = peopleCount * 50;
      } else {
        sum = peopleCount * 48;
      }
      break;
    case "summer":
      if (peopleCount <= 5) {
        sum = peopleCount * 48.5;
      } else {
        sum = peopleCount * 45;
      }
      sum *= 0.85;
      break;
    case "autumn":
      if (peopleCount <= 5) {
        sum = peopleCount * 60;
      } else {
        sum = peopleCount * 49.5;
      }
      break;
    case "winter":
      if (peopleCount <= 5) {
        sum = peopleCount * 86;
      } else {
        sum = peopleCount * 85;
      }
      sum *= 1.08;
      break;
  }
  console.log(`${sum.toFixed(2)} leva.`);
}

// calculator(["5", "spring"]);
// calculator(["10", "summer"]);
// calculator(["15", "autumn"]);
calculator(["20", "winter"]);
