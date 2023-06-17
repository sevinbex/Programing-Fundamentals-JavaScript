function seizeTheFire(arr) {
  let water = Number(arr.pop());
  let cells = [];
  let effort = 0;
  let currentCommand = arr.shift().split("#");

  while (currentCommand[0] !== undefined && water > 0) {
    let splitCommand = currentCommand.shift().split(" ");
    let temperature = splitCommand[0];
    let value = Number(splitCommand[2]);

    switch (temperature) {
      case "High":
        putOutWater(value, temperature);
        break;

      case "Medium":
        putOutWater(value, temperature);
        break;

      case "Low":
        putOutWater(value, temperature);
        break;
    }
  }

  console.log("Cells:");

  for (let i = 0; i < cells.length; i++) {
    console.log(`- ${cells[i]}`);
  }

  console.log(
    "Effort: " +
      effort.toFixed(2) +
      "\n" +
      "Total Fire: " +
      cells.reduce((a, b) => a + b, 0)
  );

  function isValueValid(cell, temperature) {
    if (temperature === "High") {
      if (cell >= 81 && cell <= 125) {
        return true;
      }
    } else if (temperature === "Medium") {
      if (cell >= 51 && cell <= 80) {
        return true;
      }
    } else if (temperature === "Low") {
      if (cell >= 1 && cell <= 50) {
        return true;
      }
    }

    return false;
  }

  function putOutWater(cell, temperature) {
    if (isValueValid(cell, temperature)) {
      if (water >= cell) {
        cells.push(cell);
        effort += cell * 0.25;
        water -= cell;
      }
    }
  }
}
