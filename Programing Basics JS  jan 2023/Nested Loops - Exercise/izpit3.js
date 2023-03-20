function ekont(input) {
  let weight = Number(input[0]);
  let type = input[1];
  let distanceInKm = Number(input[2]);
  let lessThan1 = 0.03;
  let from1to9and99 = 0.05;
  let from10to40 = 0.1;
  let from40to90 = 0.15;
  let from90to150 = 0.2;
  sum = 0;

  switch (type) {
    case "standard":
      if (weight < 1) {
        sum = lessThan1 * distanceInKm;
      } else if (weight > 1 && weight < 10) {
        sum = from1to9and99 * distanceInKm;
      } else if (weight >= 10 && weight < 40) {
        sum = from10to40 * distanceInKm;
      } else if (weight >= 40 && weight < 90) {
        sum = from40to90 * distanceInKm;
      } else if (weight >= 90 && weight <= 150) {
        sum = from90to150 * distanceInKm;
      }
      break;

    case "express":
      if (weight < 1) {
        sum =
          sum +
          0.8 * lessThan1 * distanceInKm * weight +
          distanceInKm * lessThan1;
      } else if (weight > 1 && weight < 10) {
        sum =
          sum +
          0.4 * from1to9and99 * distanceInKm * weight +
          distanceInKm * from1to9and99;
      } else if (weight >= 10 && weight < 40) {
        sum =
          sum +
          0.05 * from10to40 * distanceInKm * weight +
          distanceInKm * from10to40;
      } else if (weight >= 40 && weight < 90) {
        sum =
          sum +
          0.02 * from40to90 * distanceInKm * weight +
          distanceInKm * from40to90;
      } else if (weight >= 90 && weight <= 150) {
        sum =
          sum +
          0.01 * from90to150 * distanceInKm * weight +
          distanceInKm * from90to150;
      }
      break;
  }
  console.log(
    `The delivery of your shipment with weight of ${weight.toFixed(
      3
    )} kg. would cost ${sum.toFixed(2)} lv.`
  );
}

ekont(["1.5", "standard", "100"]);
ekont(["20", "standard", "349"]);
ekont(["87", "express", "130"]);
