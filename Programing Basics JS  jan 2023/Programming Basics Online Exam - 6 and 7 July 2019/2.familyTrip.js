function ft(input) {
  let budget = Number(input[0]);
  let nightsCount = Number(input[1]);
  let pricePerNight = Number(input[2]);
  let otherCost = Number(input[3]);

  let totalNightsCost = nightsCount * pricePerNight;
  let totalOthersCost = (budget / 100) * otherCost;

  if (nightsCount > 7) {
    totalNightsCost *= 0.95;
  }

  let totalCost = totalNightsCost + totalOthersCost;

  if (totalCost <= budget) {
    let moneyLeft = budget - totalCost;
    console.log(
      `Ivanovi will be left with ${moneyLeft.toFixed(2)} leva after vacation.`
    );
  } else {
    let moneyNeeded = totalCost - budget;
    console.log(`${moneyNeeded.toFixed(2)} leva needed.`);
  }
}

ft(["500", "7", "66", "15"]);
