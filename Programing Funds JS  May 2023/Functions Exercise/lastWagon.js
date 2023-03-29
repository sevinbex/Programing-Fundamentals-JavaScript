function wagon(array) {
  let waitingPeople = Number(array.shift());
  let wagons = array.shift().split(" ");
  let peopleOn = 0;

  for (let i = 0; i < wagons.length; i++) {
    let currentWagon = Number(wagons[i]);
    if (waitingPeople < 4) {
      wagons.splice(i, 1);
      wagons.splice(i, 0, 4);
      waitingPeople -= currentWagon;
      // console.log(wagons.join(" "));
      // console.log("The lift has empty spots!");
      // console.log(wagons.join(" "));
      // return;
    }
    if (currentWagon === 0) {
      wagons.splice(i, 1);
      wagons.splice(i, 0, 4);
      waitingPeople -= 4;
    }
    if (waitingPeople < 4) {
      wagons.splice(i, 1);
      wagons.splice(i, 0, waitingPeople);
      console.log(wagons.join(" "));
    }
    if (currentWagon > 0) {
      wagons.splice(i, 1);
      wagons.splice(i, 0, 4);
      waitingPeople -= currentWagon;
    }
  }

  console.log(`There isn't enough space! ${waitingPeople} people in a queue!`);
  console.log(wagons.join(" "));
}

// wagon(["15", "0 0 0 0 0"]);
// wagon(["20", "0 2 0"]);
wagon(["9", "0 2 2 4"]);
