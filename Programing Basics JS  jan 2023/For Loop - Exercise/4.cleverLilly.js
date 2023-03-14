function cleverLilly(input) {
  let age = Number(input[0]);
  let wMPrice = Number(input[1]);
  let toyPrice = Number(input[2]);

  let toysCount = 0;
  let moneyGot = 0;

  for (let i = 1; i <= age; i++) {
    if (i % 2 == 0) {
      moneyGot = moneyGot + 5 * i - 1;
    }
    if (i % 2 !== 0) toysCount += 1;
  }

  let moneyFromToys = toysCount * toyPrice;
  let totalMoney = moneyGot + moneyFromToys;

  if (totalMoney >= wMPrice) {
    let moneyLeft = totalMoney - wMPrice;
    console.log(`Yes! ${moneyLeft.toFixed(2)}`);
  } else {
    let moneyNeed = wMPrice - totalMoney;
    console.log(`No! ${moneyNeed.toFixed(2)}`);
  }
}

cleverLilly(["10", "170.00", "6"]);
