function cs(input) {
  let sum = 0;
  let command = input.shift();

  while (input.length !== 0) {
    let price = Number(command);
    if (price > 0) {
      sum += price;
    } else {
      console.log("Invalid price!");
    }

    command = input.shift();
  }
  let priceWithTaxes = sum + sum * 0.2;
  let taxes = sum * 0.2;

  if (command == "special") {
    priceWithTaxes = priceWithTaxes *= 0.9;
  }
  if (priceWithTaxes <= 0) {
    console.log("Invalid order!");
  } else {
    console.log("Congratulations you've just bought a new computer!");
    console.log(`Price without taxes: ${sum.toFixed(2)}$`);
    console.log(`Taxes: ${taxes.toFixed(2)}$`);
    console.log(`-----------`);
    console.log(`Total price: ${priceWithTaxes.toFixed(2)}$`);
  }
}

// cs(["1050", "200", "450", "2", "18.50", "16.86", "special"]);
// cs(["regular"]);
cs(["1023", "15", "-20", "-5.50", "450", "20", "17.66", "19.30", "regular"]);
