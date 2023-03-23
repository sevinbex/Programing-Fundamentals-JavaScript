function condense(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let number1 = array[i];
    let number2 = array[i + 1];
    array[i] = number1 + number2;
    if (i == array.length - 2) {
      array.pop();
      i = -1;
      continue;
    }
  }
  console.log(array[0]);
}

condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);
