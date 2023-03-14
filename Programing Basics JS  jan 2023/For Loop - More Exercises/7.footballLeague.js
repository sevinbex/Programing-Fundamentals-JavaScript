function fl(input) {
  let capacity = Number(input[0]);
  let fanCount = Number(input[1]);

  let sectorA = 0;
  let sectorB = 0;
  let sectorV = 0;
  let sectorG = 0;

  for (let i = 2; i <= fanCount + 1; i++) {
    let currentFan = input[i];

    switch (currentFan) {
      case "A":
        sectorA++;
        break;
      case "B":
        sectorB++;
        break;
      case "V":
        sectorV++;
        break;
      case "G":
        sectorG++;
        break;
    }
  }
  let sectorAPercentage = (sectorA / fanCount) * 100;
  let sectorBPercentage = (sectorB / fanCount) * 100;
  let sectorVPercentage = (sectorV / fanCount) * 100;
  let sectorGPercentage = (sectorG / fanCount) * 100;
  let capacityPercentage = (fanCount / capacity) * 100;
  console.log(`${sectorAPercentage.toFixed(2)}%`);
  console.log(`${sectorBPercentage.toFixed(2)}%`);
  console.log(`${sectorVPercentage.toFixed(2)}%`);
  console.log(`${sectorGPercentage.toFixed(2)}%`);
  console.log(`${capacityPercentage.toFixed(2)}%`);
}

fl(["76", "10", "A", "V", "V", "V", "G", "B", "A", "V", "B", "B"]);
