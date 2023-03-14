function timeMachine(input) {
  let budget = Number(input[0]);
  let finalYear = Number(input[1]);
  let years = 19;
  let spentMoney = 0;
  let moneyLeft = 0;
  let moneyNeed = 0;
  for (let i = 1800; i <= finalYear; i++) {
    let currentYear = Number([i]);
    if (currentYear % 2 === 0) {
      spentMoney += 12000;
    } else {
      spentMoney += 12000 + 50 * years;
      years += 2;
    }

    moneyLeft = budget - spentMoney;
  }
  if (budget >= spentMoney) {
    console.log(
      `Yes! He will live a carefree life and will have ${moneyLeft.toFixed(
        2
      )} dollars left.`
    );
  } else {
    moneyNeed = spentMoney - budget;
    console.log(`He will need ${moneyNeed.toFixed(2)} dollars to survive.`);
  }
}
timeMachine(["100000.15", "1808"]);
