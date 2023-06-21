function taxCalc(input) {
  let carsInfo = input.shift().split(">>");
  let totalTaxToPay = 0;
  let kmTaxes = 0;
  let totalIncome = 0;
  for (const car of carsInfo) {
    let currentCar = car.split(" ");
    let type = currentCar[0];
    let period = Number(currentCar[1]);
    let distance = Number(currentCar[2]);

    switch (type) {
      case "family":
        family(period, distance);
        break;
      case "heavyDuty":
        heavyDuty(period, distance);
        break;
      case "sports":
        sports(period, distance);
        break;
      default:
        console.log("Invalid car type.");
        continue;
    }

    console.log(
      `A ${type} car will pay ${totalTaxToPay.toFixed(2)} euros in taxes.`
    );
    totalIncome += totalTaxToPay;
  }

  function family(years, kilometers) {
    totalTaxToPay = 0;
    kmTaxes = 0;
    totalTaxToPay += 50;
    totalTaxToPay -= years * 5;
    kmTaxes = Math.floor(kilometers / 3000);
    totalTaxToPay += kmTaxes * 12;
  }

  function heavyDuty(years, kilometers) {
    kmTaxes = 0;
    totalTaxToPay = 0;
    totalTaxToPay += 80;
    totalTaxToPay -= years * 8;
    kmTaxes = Math.floor(kilometers / 9000);
    totalTaxToPay += kmTaxes * 14;
  }

  function sports(years, kilometers) {
    kmTaxes = 0;
    totalTaxToPay = 0;
    totalTaxToPay += 100;
    totalTaxToPay -= years * 9;
    kmTaxes = Math.floor(kilometers / 2000);
    totalTaxToPay += kmTaxes * 18;
  }

  console.log(
    `The National Revenue Agency will collect ${totalIncome.toFixed(
      2
    )} euros in taxes.`
  );
}

// taxCalc(["family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410"]);
taxCalc([
  "family 5 3210>>pickUp 1 1345>>heavyDuty 7 21000>>sports 5 9410>>family 3 9012",
]);
