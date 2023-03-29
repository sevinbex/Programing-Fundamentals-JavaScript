function positOrNegat(array) {
  let newArray = [];
  for (current of array) {
    current = Number(current);
    if (current < 0) {
      newArray.unshift(current);
    } else {
      newArray.push(current);
    }
  }

  console.log(newArray.join("\n "));
}
positOrNegat(["7", "-2", "8", "9"]);
