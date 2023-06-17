function helloFrance(input) {
  let items = input.shift().split("|");
  let budget = Number(input.shift());
  let profit = 0;
  let result = [];
  let currentMoney = budget;

  for (let i = 0; i < items.length; i++) {
    let splitted = items[i].split("->");
    let type = splitted[0];
    let price = Number(splitted[1]);

    if (price > currentMoney) {
      continue;
    }

    if (type === "Clothes") {
      if (price <= 50) {
        let finalPrice = price * 1.4;
        profit += finalPrice;
        currentMoney -= price;
        result.push(finalPrice);
      }
    }
    if (type === "Shoes") {
      if (price <= 35) {
        let finalPrice = price * 1.4;
        profit += finalPrice;
        currentMoney -= price;
        result.push(finalPrice);
      }
    }
    if (type === "Accessories") {
      if (price <= 20.5) {
        let finalPrice = price * 1.4;
        profit += finalPrice;
        currentMoney -= price;
        result.push(finalPrice);
      }
    }
  }
  let sum = profit + currentMoney - budget;

  console.log(result.map((x) => x.toFixed(2)).join(" "));
  console.log(`Profit: ${sum.toFixed(2)}`);

  if (sum + budget >= 150) {
    console.log(`Hello, France!`);
  } else {
    console.log(`Time to go.`);
  }
}
