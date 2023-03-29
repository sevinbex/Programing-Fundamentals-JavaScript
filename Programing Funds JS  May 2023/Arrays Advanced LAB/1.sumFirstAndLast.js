function firstAndLast(array) {
  let first = Number(array.shift());
  let last = Number(array.pop());
  let sum = first + last;

  console.log(sum);
}

firstAndLast(["20", "30", "40"]);
