function GvsK(input) {
  let budget = Number(input[0]);
  let statistCount = Number(input[1]);
  let costumePrice = Number(input[2]);

  let decorPrice = budget * 0.1;

  if (statistCount > 150) {
    costumePrice *= 0.9;
  }

  let totalSum = statistCount * costumePrice + decorPrice;

  if (totalSum <= budget) {
    let moneyLeft = budget - totalSum;
    console.log("Action!");
    console.log(
      `Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`
    );
  } else {
    let moneyNeed = totalSum - budget;
    console.log("Not enough money!");
    console.log(`Wingard needs ${moneyNeed.toFixed(2)} leva more.`);
  }
}

GvsK(["20000", "120", "55.5"]);
GvsK(["15437.62", "186", "57.99"]);
GvsK(["9587.88", "222", "55.68"]);
