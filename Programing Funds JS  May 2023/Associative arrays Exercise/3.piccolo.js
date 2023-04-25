function piccolo(list) {
  const parking = {};

  for (const line of list) {
    let [command, carNumber] = line.split(", ");

    if (command == "IN") {
      parking[carNumber] = command;
    } else if (command == "OUT") {
      delete parking[carNumber];
    }
  }
  let parkingEntries = Object.entries(parking).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  if (parkingEntries.length == 0) {
    console.log("Parking Lot is Empty");
    return;
  }
  for (const plateNumber of parkingEntries) {
    console.log(plateNumber[0]);
  }
}

piccolo([
  "IN, CA2844AA",

  "IN, CA1234TA",

  "OUT, CA2844AA",

  "IN, CA9999TT",

  "IN, CA2866HI",

  "OUT, CA1234TA",

  "IN, CA2844AA",

  "OUT, CA2866HI",

  "IN, CA9876HH",

  "IN, CA2822UU",
]);

piccolo(["IN, CA2844AA", "IN, CA1234TA", "OUT, CA2844AA", "OUT, CA1234TA"]);
