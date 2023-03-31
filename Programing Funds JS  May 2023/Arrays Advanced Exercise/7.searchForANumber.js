function searchNumber(array, operations) {
  let numbersToTake = operations[0];
  let numbersToDelete = operations[1];
  let magicNumber = operations[2];

  let newArray = array.slice(0, numbersToTake);
  newArray.splice(0, numbersToDelete);
  let counter = 0;
  for (let el of newArray) {
    if (el === magicNumber) {
      counter++;
    }
  }
  console.log(`Number ${magicNumber} occurs ${counter} times.`);
}

// searchNumber(
//   [5, 2, 3, 4, 1, 6],

//   [5, 2, 3]
// );

searchNumber(
  [7, 1, 5, 8, 2, 7],

  [3, 1, 5]
);

// The first number represents the number of elements you have to take from the first array (starting from the first one).

// The second number represents the number of elements you have to delete from the numbers you took (starting from the first one).

// The third number is the number we search in our collection after the manipulations
