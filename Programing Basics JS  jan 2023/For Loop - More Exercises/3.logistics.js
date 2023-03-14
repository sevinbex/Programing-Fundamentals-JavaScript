function logistics(input) {
  //   let naulCount = Number(input[0]);
  let trainTons = 0;
  let microbusTons = 0;
  let tirTons = 0;
  let totalTons = 0;
  for (let i = 1; i <= input.length - 1; i++) {
    let currentNaul = Number(input[i]);
    totalTons = totalTons + Number(input[i]);
    if (currentNaul <= 3) {
      microbusTons += currentNaul;
    } else if (currentNaul <= 11) {
      tirTons += currentNaul;
    } else {
      trainTons += currentNaul;
    }
  }
  let totalMoney = microbusTons * 200 + tirTons * 175 + trainTons * 120;
  let averagePriceOfTon = totalMoney / totalTons;
  let microbusPercentage = (microbusTons / totalTons) * 100;
  let tirPercentage = (tirTons / totalTons) * 100;
  let trainPercentage = (trainTons / totalTons) * 100;

  console.log(averagePriceOfTon.toFixed(2));
  console.log(`${microbusPercentage.toFixed(2)}%`);
  console.log(`${tirPercentage.toFixed(2)}%`);
  console.log(`${trainPercentage.toFixed(2)}%`);
}

logistics(["5", "2", "10", "20", "1", "7"]);
