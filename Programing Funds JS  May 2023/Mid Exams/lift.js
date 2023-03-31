function fillLift(input) {
  let peopleLeft = Number(input[0]);
  let cabins = input[1].split(" ").map(Number);
  let capacity = 4;

  let i = 0;

  while (i < cabins.length && peopleLeft > 0) {
    let spaceLeft = capacity - cabins[i];
    if (spaceLeft > 0) {
      let peopleToAdd = Math.min(spaceLeft, peopleLeft);
      cabins[i] += peopleToAdd;
      peopleLeft -= peopleToAdd;
    }
    i++;
  }

  if (peopleLeft === 0 && cabins.some((s) => s < capacity)) {
    console.log(`The lift has empty spots!\n${cabins.join(" ")}`);
  } else if (peopleLeft > 0 && i >= cabins.length) {
    console.log(
      `There isn't enough space! ${peopleLeft} people in a queue!\n${cabins
        .reverse()
        .join(" ")}`
    );
  } else {
    console.log(cabins.reverse().join(" "));
  }
}

fillLift(["15", "0 0 0 0 0"]);
fillLift(["20", "0 2 0"]);
