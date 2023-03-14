function travelAgency(input) {
  let destination = input[0];
  let packType = input[1];
  let vip = input[2];
  let days = Number(input[3]);
  let sum = 0;

  if (days > 7) {
    days -= 1;
  }

  switch (destination) {
    case "Bansko":
    case "Borovets":
      switch (packType) {
        case "withEquipment":
          sum = days * 100;
          if (vip === "yes") {
            sum *= 0.9;
          }
          //   console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
          break;
        case "noEquipment":
          sum = days * 80;
          if (vip === "yes") {
            sum *= 0.95;
          }
          //   console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
          break;
        default:
          console.log("Invalid input!");
          return;
      }
      break;
    case "Varna":
    case "Burgas":
      switch (packType) {
        case "withBreakfast":
          sum = days * 130;
          if (vip === "yes") {
            sum *= 0.88;
          }
          //   console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
          break;
        case "noBreakfast":
          sum = days * 100;
          if (vip === "yes") {
            sum *= 0.93;
          }
          //   console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
          break;
        default:
          console.log("Invalid input!");
          return;
      }
      break;
    default:
      console.log("Invalid input!");
      return;
  }
  if (days < 1) {
    console.log("Days must be positive number!");
  } else {
    console.log(`The price is ${sum.toFixed(2)}lv! Have a nice time!`);
  }
}

travelAgency(["Varna", "nsikakfast", "no", "5"]);
