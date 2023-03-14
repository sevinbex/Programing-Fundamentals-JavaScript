function ab(input) {
  let over20kg = Number(input[0]);
  let luggageWeight = Number(input[1]);
  let daysToFly = Number(input[2]);
  let luggageCount = Number(input[3]);
  let sum = 0;
  let under10kg = over20kg * 0.2;
  let between10and20kg = over20kg * 0.5;

  if (luggageWeight <= 10 && luggageWeight > 0) {
    sum += under10kg;
  } else if (luggageWeight <= 20) {
    sum += between10and20kg;
  } else if (luggageWeight > 20 && luggageWeight <= 32) {
    sum += over20kg;
  }

  if (daysToFly < 7) {
    sum += sum * 0.4;
  } else if (daysToFly <= 30) {
    sum += sum * 0.15;
  } else if (daysToFly > 30) {
    sum += sum * 0.1;
  }

  totalLuggageSum = luggageCount * sum;

  console.log(`The total price of bags is: ${totalLuggageSum.toFixed(2)} lv.`);
}

// ab(["30", "32", "15", "2"]);
// ab(["63.80", "23", "3", "1"]);

ab(["25.50", "5", "36", "6"]);
