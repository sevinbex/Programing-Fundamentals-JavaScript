function braceletStand(input) {
  let everydayMoney = Number(input[0]);
  let salesMoneyPerDay = Number(input[1]);
  let spendingForWholePeriod = Number(input[2]);
  let giftPrice = Number(input[3]);
  let days = 5;

  let jobni = everydayMoney * days;
  let salesMoney = salesMoneyPerDay * days;
  let totalWonMoney = jobni + salesMoney;
  let moneyLeft = totalWonMoney - spendingForWholePeriod;

  if (moneyLeft >= giftPrice) {
    console.log(
      `Profit: ${moneyLeft.toFixed(2)} BGN, the gift has been purchased.`
    );
  } else {
    let moneyNeed = giftPrice - moneyLeft;
    console.log(`Insufficient money: ${moneyNeed.toFixed(2)} BGN.`);
  }
}
// braceletStand(["5.12", "32.05", "15", "150"]);
// braceletStand(["2.10", "17.50", "20.20", "148.50"]);
braceletStand(["15.20", "200.00", "7.30", "1500.12"]);
