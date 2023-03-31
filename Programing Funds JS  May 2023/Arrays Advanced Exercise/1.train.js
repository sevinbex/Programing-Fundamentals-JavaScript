function train(array) {
  let composition = array.shift().split(" ").map(Number);
  let maxCapacity = Number(array.shift());

  for (let i = 0; i < array.length; i++) {
    let currentAction = array[i].split(" ");
    if (currentAction[0] === "Add") {
      composition.push(Number(currentAction[1]));
    } else {
      let peopleToGoIn = Number(currentAction[0]);
      for (let j = 0; j < composition.length; j++) {
        let passengersInCurrentWagon = composition[j];
        if (passengersInCurrentWagon + peopleToGoIn <= maxCapacity) {
          composition[j] += peopleToGoIn;
          break;
        }
      }
    }
  }

  console.log(composition.join(" "));
}

train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
